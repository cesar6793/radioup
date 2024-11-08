import { base_path } from "@/src/config/routers";


export async function uploadFile(formData) {
  try {
    const response = await fetch(`${base_path}/uploadfile/`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Error uploading file');
    }
    return await response.json();
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function getReport(imageUrl) {
    const response = await fetch(`${base_path}/get_report/?image_url=${encodeURIComponent(imageUrl)}`);
  
    if (!response.ok) {
      throw new Error("Error fetching report");
    }
  
    return await response.json();
  }


// export async function uploadFile(formData) {
//   try {
//     const response = await fetch(`/api/uploadfile`, { 
//       method: 'POST',
//       body: formData,
//     });
    
//     if (!response.ok) {
//       throw new Error('Error uploading file');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     throw error;
//   }
// }

// export async function getReport(imageUrl) {
//   try {
//     const response = await fetch(`/api/get_report?image_url=${encodeURIComponent(imageUrl)}`); 

//     if (!response.ok) {
//       throw new Error("Error fetching report");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching report:', error);
//     throw error;
//   }
// }
