const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const multerS3 = require('multer-s3');
const cors = require('cors');
const uuid = require('uuid')

const port = 4000
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

// code nay da ok sai duoc roi. add thang face qua s3 roi len collectin luon
// create express app
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// router
app.get('/', (req, res) => {
  res.json({
    message: 'hello world'
  });
});

const s3 = new AWS.S3();
var rekognition = new AWS.Rekognition({});
// upload
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'awsrek',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const keyFile = uuid.v4()
      cb(null, `${keyFile}`)
    }
  })
});

// app.post('/upload', upload.single('image'), (req, res) => {
//   // params add faces 
//   var params = {
//     "CollectionId": "faces",
//     "Image": {
//       "S3Object": {
//         "Bucket": "awsrek",
//         "Name": req.file.originalname
//       }
//     },
//     "ExternalImageId": req.file.originalname,
//     "DetectionAttributes": [
//       "ALL"
//     ]
//   }

//   // add face into faces collection 
//   rekognition.indexFaces(params, (err, data) => {
//     if (err) {
//       console.log(err.toString());
//     } else {
//       if (data.FaceRecords.length === 0) {
//         res.json({
//           message: 'Faces not found. Please try again'
//         })
//       }
//       else if (data.FaceRecords.length > 1) {
//         // delete face added
//         for (let i = 0; i < data.FaceRecords.length; i++) {
//           var params = {
//             "CollectionId": "faces",
//             "FaceIds": [data.FaceRecords[i].Face.FaceId]
//           }
//           rekognition.deleteFaces(params, (err, data) => {
//             if (err) {
//               console.log(err.toString())
//             }
//             else {
//               console.log('delete face thanh cong');
//               console.log(data)
//             }
//           })
//         }
//         res.json({
//           message: 'Please Take only face. Please try again',
//         })
//       } else {
//         res.json({
//           Message: 'upload sucess',
//           File: req.file.originalname,
//           FaceId: data.FaceRecords[0].Face.FaceId,
//           ImageId: data.FaceRecords[0].Face.ImageId,
//           ExternalImageId: data.FaceRecords[0].Face.ExternalImageId
//         });
//         console.log(data);
//       }
//     }
//   })
// })

// search face in collection
app.get('/search', (req, res) => {
  // console.log(req.query);
  var params = {
    CollectionId: "faces",
    FaceMatchThreshold: 90,
    Image: {
      S3Object: {
        Bucket: "awsrek",
        Name: req.query.image
      }
    },
    MaxFaces: 5
  };
  const searchface = rekognition.searchFacesByImage(params).promise()
  searchface.then(data => {
    let result = {
      FaceId : data.FaceMatches[0].Face.FaceId
    }
    res.status(200).json(result)
  })
  .catch(err => {
    res.status(402).json(
    {
      error: new Error('Can not found face')
    })
  })
  // rekognition.searchFacesByImage(params, function (err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else if (data.FaceMatches.length) {
  //     let face = {
  //       FaceId: data.FaceMatches[0].Face.FaceId,
  //       Similarity: data.FaceMatches[0].Similarity,
  //       ExternalImageId: data.FaceMatches[0].Face.ExternalImageId
  //     }
  //     console.log(face);
  //     res.json(face)
  //   } else {
  //     res.json({
  //       message: 'please try agin. can not face in server'
  //     })
  //   }
  // })
})


app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.body)
 res.send({
   message: "it ok"
 })
  
})

app.post('/', (req, res) => {
  console.log(req.body)
})
app.listen(4000, () => console.log(`server running on port ${port}`));
// le quang sang