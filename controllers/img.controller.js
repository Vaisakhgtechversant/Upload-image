const express=require('express')
const server=express()
const path = require('path');
const fs = require('fs');
const logger=require('./logger')

exports.saveBlog = async (req, res) => {
    try {
      res.status(200).send({status:"success","message":"file uploaded successfully","filename":req.body.filename});
      // logger.customerLogger.log('info','successfully upload')
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server errorsss');
      // logger.customerLogger.log('error','found error')

    }
  };

  
exports.getimage=( (req, res) => {
    const fileName = req.params.filename;
    console.log(fileName)
    const filePath = path.join("images/", fileName);
   
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }


        // Set the appropriate headers for the file download
        res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
        res.setHeader('Content-type', 'application/octet-stream');


        // Create a read stream from the file and pipe it to the response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
});
