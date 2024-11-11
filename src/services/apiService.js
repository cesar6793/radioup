const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';  // Set BASE_URL dynamically based on environment
const POCKETBASE_URL  = process.env.NEXT_PUBLIC_API_POCKETBASE

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');





// Function to upload a file to /api/uploadfile
export async function uploadFile(formData) {
  try {
    const response = await fetch(`${BASE_URL}/upload/`, { 
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Error uploading file');
    }
    return await response.json();  // Returns the uploaded file URL
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// Function to get the list of radiography image URLs from /api/get_radiografias
export async function getRadiografias() {
  try {
    const response = await fetch(`${BASE_URL}/api/get_radiografias`);

    if (!response.ok) {
      throw new Error('Error fetching radiographies');
    }

    return await response.json();  // Returns an array of image URLs
  } catch (error) {
    console.error('Error fetching radiographies:', error);
    throw error;
  }
}

// Function to get a report based on an image URL from /api/get_reports
export async function getReport(imageUrl) {
  try {
    const response = await fetch(`${BASE_URL}/get_report/?image_url=${encodeURIComponent(imageUrl)}`);

    if (!response.ok) {
      throw new Error('Error fetching report');
    }

    return await response.json();  // Returns the report data
  } catch (error) {
    console.error('Error fetching report:', error);
    throw error;
  }
}

export async function login(identity,password){
//   const authData = await pb.collection('medics').authWithPassword(
//     'YOUR_USERNAME_OR_EMAIL',
//     'YOUR_PASSWORD',
// );

// // after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated account
// pb.authStore.clear();
  try {
    const authData = await pb.collection('medics').authWithPassword(
      identity,
      password,
  );
  
    // after the above you can also access the auth data from the authStore
    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    // console.log(pb.authStore.model.id);
    
    // "logout" the last authenticated account
    // pb.authStore.clear();
    
    if (!pb.authStore.isValid) {
      throw new Error('Datos incorrectos');
    }
    return await authData;  // Returns the uploaded file URL
  } catch (error) {
    console.error('Error while login', error);
    throw error;
  }
}