import { connect } from "mongoose";
import { User } from "../models/user.model.js";
import { Video } from "../models/video.model.js";
import Subscription from "../models/Subscription.Model.js";

const connectDB = async () => {
    try {
        const connectionInstance = await connect("mongodb://127.0.0.1:27017/professional_approach")
        console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("MongoDB Connection Error ", err)
        process.exit(1);
    }
}

connectDB();

const insertUsersDataForTesting = async () => {
    await User.deleteMany({});
    await User.insertMany([{
        "_id":1,
        "username": "dgainsburgh0",
        "email": "yhaggeth0@bluehost.com",
        "avatar": "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
        "password": "8c1a6a9b-15df-4c29-a0d8-e048679e9fda",
        "refreshToken": "1fe8f3c2-9e5b-412c-a079-96676c1bd0ec",

      }, {
        "_id":2,
        "username": "hcheake1",
        "email": "tairdrie1@parallels.com",
        "avatar": "http://dummyimage.com/128x100.png/ff4444/ffffff",
        "coverImage": "http://dummyimage.com/126x100.png/dddddd/000000",
        "password": "7b8ec63b-4e2b-4eab-970e-005f8cdc69b5",
        "refreshToken": "8f58c796-7615-4aa8-8439-207b763a4898",

      }, {
        "_id":3,
        "username": "mayrs2",
        "email": "twathall2@de.vu",
        "avatar": "http://dummyimage.com/235x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/160x100.png/cc0000/ffffff",
        "password": "abea4491-3496-4483-8edd-9d37cf6805eb",
        "refreshToken": "4b7cafec-683d-466b-a251-f9f35292375b",

      }, {
        "_id":4,
        "username": "lkenealy3",
        "email": "dstaynes3@yellowbook.com",
        "avatar": "http://dummyimage.com/240x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/110x100.png/cc0000/ffffff",
        "password": "00216f8f-c793-4646-9c05-fe1cc73e4036",
        "refreshToken": "e67d3f6e-bd51-4d4a-8b8e-4e5fce45fd40",

      }, {
        "_id":5,
        "username": "csahnow4",
        "email": "jbuxcy4@webeden.co.uk",
        "avatar": "http://dummyimage.com/161x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/188x100.png/ff4444/ffffff",
        "password": "d6f10609-4f63-4a8e-93e3-c52c054fb044",
        "refreshToken": "adad2937-e5a4-4cbe-88b8-21260ffab15b",

      }, {
        "_id":6,
        "username": "tthompson5",
        "email": "cgilston5@ning.com",
        "avatar": "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/140x100.png/cc0000/ffffff",
        "password": "39bb3e3f-be32-42bb-82d5-98e6ebf2ada5",
        "refreshToken": "aba8ee91-08b8-4180-a13c-be1c4c56fd26",

      }, {
        "_id":7,
        "username": "gallibon6",
        "email": "clemoir6@drupal.org",
        "avatar": "http://dummyimage.com/211x100.png/ff4444/ffffff",
        "coverImage": "http://dummyimage.com/125x100.png/ff4444/ffffff",
        "password": "f5b0ca87-96c1-4f5d-b609-7a7a9218a22e",
        "refreshToken": "b299da10-8142-4b46-b19b-e5d612faed37",

      }, {
        "_id":8,
        "username": "mmessum7",
        "email": "aspeedin7@seattletimes.com",
        "avatar": "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
        "password": "ee88f4e9-4bef-4b07-a8d7-435adbffef39",
        "refreshToken": "c700af0b-b742-4c45-8fb1-a82c45508319",

      }, {
        "_id":9,
        "username": "hnewlin8",
        "email": "mreardon8@google.com.br",
        "avatar": "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/220x100.png/cc0000/ffffff",
        "password": "d38d56dc-8f25-4085-8f69-629b5b8dbb8b",
        "refreshToken": "362a3328-1dea-402f-9985-1438e919dcad",

      }, {
        "username": "bmarieton9",
        "email": "ginnwood9@yelp.com",
        "avatar": "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/130x100.png/dddddd/000000",
        "password": "ced5fbdd-38be-46bd-afa8-28b04696b357",
        "refreshToken": "83b0a657-90f1-4160-bd8c-867af5b4de1a",

      }, {
        "_id":10,
        "username": "fsnelgara",
        "email": "tcoutharda@opera.com",
        "avatar": "http://dummyimage.com/238x100.png/ff4444/ffffff",
        "coverImage": "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
        "password": "b956ec2b-ead5-4c90-bd20-0a50255ae258",
        "refreshToken": "a6ad7e47-391f-4103-bc65-761d252f43f2",

      }, {
        "_id":11,
        "username": "beggersb",
        "email": "cvendittob@studiopress.com",
        "avatar": "http://dummyimage.com/248x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
        "password": "60ec3b92-dc16-4a1f-ae98-3b8a56901820",
        "refreshToken": "9cfbad61-468d-49ed-8b7b-12fa439ee794",

      }, {
        "_id":12,
        "username": "mrablc",
        "email": "alaurensc@google.de",
        "avatar": "http://dummyimage.com/177x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/141x100.png/cc0000/ffffff",
        "password": "13575b98-3821-49ae-b4a9-81567e11010d",
        "refreshToken": "5ba7d66a-3f83-479e-92d2-e75082ff3c01",

      }, {
        "_id":13,
        "username": "rbohead",
        "email": "agriswaited@si.edu",
        "avatar": "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/235x100.png/dddddd/000000",
        "password": "d05abe87-728a-45c1-927a-174a3c92bacd",
        "refreshToken": "c8b0c43c-11b9-4cff-b801-ffbdb91b0f35",

      }, {
        "_id":14,
        "username": "pboothroyde",
        "email": "kmartignonie@phoca.cz",
        "avatar": "http://dummyimage.com/211x100.png/ff4444/ffffff",
        "coverImage": "http://dummyimage.com/163x100.png/cc0000/ffffff",
        "password": "3f461cc9-c778-4409-958b-624f71f4b6b0",
        "refreshToken": "bf7f3e3c-dcca-44bf-894d-e724fddd0454",

      }, {
        "_id":15,
        "username": "skneeshawf",
        "email": "bprobetsf@soundcloud.com",
        "avatar": "http://dummyimage.com/101x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/197x100.png/dddddd/000000",
        "password": "49c276ca-35e7-412a-ae29-2e20a8b74c95",
        "refreshToken": "b037ef4c-2a94-47d7-9891-7992ac41d0ca",

      }, {
        "_id":16,
        "username": "scoburng",
        "email": "gtuiteg@studiopress.com",
        "avatar": "http://dummyimage.com/145x100.png/cc0000/ffffff",
        "coverImage": "http://dummyimage.com/106x100.png/ff4444/ffffff",
        "password": "945ce53d-1718-4bf0-998f-5669d25c6905",
        "refreshToken": "0c35182e-51a7-4204-ad34-10346259d3b1",

      }, {
        "_id":17,
        "username": "mburkerth",
        "email": "bgarthshoreh@storify.com",
        "avatar": "http://dummyimage.com/101x100.png/ff4444/ffffff",
        "coverImage": "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
        "password": "cfc85d0c-3e98-4874-a03a-28a49391ecc7",
        "refreshToken": "0fba65e5-6672-4e7f-b1be-bed58387e571",

      }, {
        "_id":18,
        "username": "rbeevisi",
        "email": "sdeeveyi@army.mil",
        "avatar": "http://dummyimage.com/164x100.png/dddddd/000000",
        "coverImage": "http://dummyimage.com/128x100.png/dddddd/000000",
        "password": "00060d8c-4b57-4822-826b-3a8cda6bbfc7",
        "refreshToken": "65826e16-6da6-4dcb-be10-1ad54375d6c0",

      }, {
        "_id":19,
        "username": "ksilverlockj",
        "email": "cedmensonj@sciencedaily.com",
        "avatar": "http://dummyimage.com/104x100.png/5fa2dd/ffffff",
        "coverImage": "http://dummyimage.com/171x100.png/5fa2dd/ffffff",
        "password": "92fe871f-2890-42df-8e93-e2d285d2c06b",
        "refreshToken": "f942047f-f99d-4989-89b0-b24ed5294ad5",

      }])
}

// insertUsersDataForTesting();

const insertVideoDataForTesting = async () => {
    await Video.deleteMany({});
    await Video.insertMany([{
        "_id":"A",
        "videoFile": "http://dummyimage.com/226x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/224x100.png/dddddd/000000",
        "title": "Rev",
        "description": "Path fx in neopltc dis, unsp hand, subs for fx w delay heal",
        "duration": "10:28 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"B",
        "videoFile": "http://dummyimage.com/141x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/182x100.png/cc0000/ffffff",
        "title": "Mr",
        "description": "Accident to, on or involving ice yacht, subsequent encounter",
        "duration": "10:35 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"C",
        "videoFile": "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
        "title": "Ms",
        "description": "Displ commnt fx shaft of l tibia, 7thH",
        "duration": "12:58 PM",
        "isPublished": true,

        "views":420
    }, {
        "_id":"D",
        "videoFile": "http://dummyimage.com/118x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/144x100.png/dddddd/000000",
        "title": "Ms",
        "description": "Chronic periodontitis, generalized, unspecified severity",
        "duration": "10:10 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"E",
        "videoFile": "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/193x100.png/cc0000/ffffff",
        "title": "Honorable",
        "description": "Poisoning by sulfonides, accidental, sequela",
        "duration": "11:26 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"F",
        "videoFile": "http://dummyimage.com/142x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/186x100.png/cc0000/ffffff",
        "title": "Dr",
        "description": "Postprocedural septic shock",
        "duration": "1:21 PM",
        "isPublished": true,

        "views":420
    }, {
        "_id":"FF",
        "videoFile": "http://dummyimage.com/125x100.png/dddddd/000000",
        "thumbnail": "http://dummyimage.com/156x100.png/ff4444/ffffff",
        "title": "Honorable",
        "description": "Displ transverse fx shaft of l rad, 7thK",
        "duration": "7:08 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"G",
        "videoFile": "http://dummyimage.com/198x100.png/dddddd/000000",
        "thumbnail": "http://dummyimage.com/135x100.png/dddddd/000000",
        "title": "Mr",
        "description": "Oth fx shaft of rad, r arm, 7thE",
        "duration": "5:03 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"H",
        "videoFile": "http://dummyimage.com/176x100.png/ff4444/ffffff",
        "thumbnail": "http://dummyimage.com/206x100.png/ff4444/ffffff",
        "title": "Ms",
        "description": "Other sprain of right little finger",
        "duration": "3:15 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"I",
        "videoFile": "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/244x100.png/dddddd/000000",
        "title": "Rev",
        "description": "Contusion of abdominal wall, subsequent encounter",
        "duration": "10:08 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"J",
        "videoFile": "http://dummyimage.com/248x100.png/ff4444/ffffff",
        "thumbnail": "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
        "title": "Mr",
        "description": "Oth bursitis, not elsewhere classified, left ankle and foot",
        "duration": "5:56 PM",
        "isPublished": true,

        "views":420
    }, {
        "_id":"K",
        "videoFile": "http://dummyimage.com/108x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/205x100.png/ff4444/ffffff",
        "title": "Honorable",
        "description": "Poisoning by saline and osmotic laxatives, assault, subs",
        "duration": "9:18 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"L",
        "videoFile": "http://dummyimage.com/216x100.png/ff4444/ffffff",
        "thumbnail": "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
        "title": "Mrs",
        "description": "Arthritis due to other bacteria, elbow",
        "duration": "8:47 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"M",
        "videoFile": "http://dummyimage.com/127x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/150x100.png/ff4444/ffffff",
        "title": "Ms",
        "description": "Myiasis of other sites",
        "duration": "6:23 PM",
        "isPublished": true,

        "views":420
    }, {
        "_id":"N",
        "videoFile": "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/219x100.png/ff4444/ffffff",
        "title": "Ms",
        "description": "Contact with and (suspected) exposure to water pollution",
        "duration": "12:54 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"O",
        "videoFile": "http://dummyimage.com/211x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/218x100.png/cc0000/ffffff",
        "title": "Dr",
        "description": "Occupant of rail trn/veh injured in collision w oth object",
        "duration": "10:35 ",
        "isPublished": false,

        "views":420
    }, {
        "_id":"P",
        "videoFile": "http://dummyimage.com/214x100.png/ff4444/ffffff",
        "thumbnail": "http://dummyimage.com/165x100.png/dddddd/000000",
        "title": "Dr",
        "description": "Nondisp seg fx shaft of unsp tibia, 7thD",
        "duration": "4:52 ",
        "isPublished": true,

        "views":420
    }, {
        "_id":"Q",
        "videoFile": "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/158x100.png/dddddd/000000",
        "title": "Dr",
        "description": "Oth chronic hematogenous osteomyelitis, left ankle and foot",
        "duration": "11:25 ",
        "isPublished": true,

        "views":420
    }, {
        "_id":"R",
        "videoFile": "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
        "thumbnail": "http://dummyimage.com/138x100.png/dddddd/000000",
        "title": "Ms",
        "description": "Posterior dislocation of left ulnohumeral joint",
        "duration": "7:48 PM",
        "isPublished": false,

        "views":420
    }, {
        "_id":"S",
        "videoFile": "http://dummyimage.com/112x100.png/cc0000/ffffff",
        "thumbnail": "http://dummyimage.com/246x100.png/5fa2dd/ffffff",
        "title": "Mr",
        "description": "Disp fx of 3rd metatarsal bone, unsp ft, 7thD",
        "duration": "11:33 ",
        "isPublished": false,

        "views":420
    }]
    )
}

insertVideoDataForTesting();

// const insertSubscriptionDataForTesting = async () => {
//     await Subscription.insertMany([{
//         "subscriber":{},
//         "channel":{}
//     }])
// }

// insertSubscriptionDataForTesting();

const insertLikeDataForTesting = async () => {

}

// insertLikeDataForTesting();


const insertTweetDataForTesting = async () => {

}

// insertTweetDataForTesting();

const insertCommentDataForTesting = async () => {

}

// insertCommentDataForTesting();

const insertPlaylistDataForTesting = async () => {

}

// insertPlaylistDataForTesting();