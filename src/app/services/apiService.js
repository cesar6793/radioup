const BASE_URL = 'http://localhost:8000'; // Ajusta la URL según corresponda

export async function uploadFile(formData) {
  try {
    const response = await fetch(`${BASE_URL}/uploadfile/`, {
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
    const response = await fetch(`http://localhost:8000/get_report/?image_url=${encodeURIComponent(imageUrl)}`);
  
    if (!response.ok) {
      throw new Error("Error fetching report");
    }
  
    return await response.json();
  }

