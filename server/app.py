from flask import Flask, request, jsonify
from forms import ContactForm
import os
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect
from dotenv import load_dotenv
from flask_mail import Message, Mail

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('GMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('GMAIL_PASS')

mail = Mail(app)

csrf = CSRFProtect(app)

CORS(app, origins=[
    'http://localhost:5173',
    'https://portfolio-fy8k.onrender.com'
])

@csrf.exempt
@app.route('/api/contact', methods=['POST'])
def contact():
    form = ContactForm(data=request.json, meta={'csrf': False})
    
    if form.validate():
        msg = Message (
            subject='New Contact Form Submission',
            sender=app.config['MAIL_USERNAME'],
            recipients=[app.config['MAIL_USERNAME']],
            html= f'''
            <h1>New Form Received</h1>
            <br>
            <p><strong>Name:</strong> {form.name.data}</p>
            <p><strong>Email:</strong> {form.email.data}</p>
            <p><strong>Phone:</strong> {form.phone.data}</p>
            <p><strong>Message:</strong><br>{form.message.data}</p>
            '''
        )
        
        mail.send(msg)

        return jsonify({'sucess': True, 'message': 'Form sent successfully'}), 200
    else:
        print("----------------------------", form.errors)
        return jsonify({'success': False, 'errors': form.errors}), 400



if __name__ == '__main__':
    app.run(debug=True)