import md5 from 'md5';
import AWS from 'aws-sdk';
import fs from 'fs';

var env = process.env.NODE_ENV || "development";
var aws_config = require('../config/aws.json');
var kue = require('kue');
var errors = require('../config/errors.json');
import AppError from '../utils/app_error';

class AppHelper {
  get_app_error_object(error_string) {
    var error = errors[error_string];
    if (!error) {
      error = {
        code: 2000,
        message: error_string || 'Bad Request',
        responseCode: 400
      };
    }
    var err_obj = new AppError(error.code, error.message, error.responseCode);
    return err_obj;
  }
  


  
  get_file(local_filepath) {
    return new Promise(function (resolve, reject) {
      fs.readFile(local_filepath, function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        
        resolve(data);
      });
    });
  }
  
  write_file(local_filepath, file_data) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(local_filepath, file_data, function (err) {
        if (err) {
          reject(err);
          return;
        }
        
        resolve(local_filepath);
      });
    });
  }
  


  


  
  get_file_url_from_s3(filename, bucket) {
    return new Promise(function (resolve, reject) {
      let s3 = new AWS.S3();
      let urlParams = {Bucket: bucket, Key: filename, Expires: 561600}; //Expires after 3 months
      s3.getSignedUrl('getObject', urlParams, function (err, url) {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      })
    });
  }
}

var app_helper = new AppHelper();
export default app_helper;
