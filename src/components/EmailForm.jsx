import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [file, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the email with the provided data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('comments', comments);
    formData.append('file', file);

    // Example of sending formData using fetch
    fetch('/send-email', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Handle response
    })
    .catch(error => {
      // Handle error
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
  <label htmlFor="email" className="block"></label>
  <input placeholder='Enter your Email'
    type="email" 
    id="email" 
    value={email} 
    onChange={handleEmailChange} 
    className="w-full px-3 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
  />
</div>
<div className="mb-1">
  <label htmlFor="comments"  className="block bg-transparent" > </label>
  <textarea placeholder='Enter your Comments'
    id="comments" 
    value={comments} 
    onChange={handleCommentsChange} 
    className="w-full px-3 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
  ></textarea>
</div>
<div className="mb-3">
  <label htmlFor="file" className="block">Attachment:</label>
  <input 
    type="file" 
    id="file" 
    onChange={handleFileChange} 
    className="w-full px-3 py-2 border rounded-md bg-transparent text-gray-900 focus:outline-none focus:border-blue-500"
  />
</div>

      <button type="submit" className='bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg'>Send Email</button>
    </form>
  );
};

export default EmailForm;
