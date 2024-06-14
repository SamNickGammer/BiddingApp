import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadComponent = () => {
//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };
//   const handleChange = async ({ fileList: newFileList }) => {
//     await getBase64(newFileList[0]?.originFileObj).then(res => {
//         setFileList(newFileList)
//         console.log({res})
//     })
//   };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const beforeUpload = (file) => {
    console.log(file)
    return false
  }

  return (
    <>
      <Upload
        action={'https://localhost:3000/'}
        listType="picture-circle"
        beforeUpload={beforeUpload}
      >
        {uploadButton}
      </Upload>
    </>
  );
};
export default UploadComponent;