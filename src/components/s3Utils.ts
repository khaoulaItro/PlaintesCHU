import AWS from 'aws-sdk';

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!
});

const s3 = new AWS.S3();

export const uploadImageToS3 = async (file: File) => {
  const params = {
    Bucket: process.env.REACT_APP_S3_BUCKET_NAME!,
    Key: `images/${file.name}`,
    Body: file,
    ContentType: file.type,
    ACL: 'public-read' // Ensure the file is publicly accessible
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('S3 Upload Data:', data); // Debugging information
    return data.Location; // URL of the uploaded image
  } catch (err) {
    console.error('Error uploading image to S3', err);
    throw err;
  }
};
