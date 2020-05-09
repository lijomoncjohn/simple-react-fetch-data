import React from 'react';
import EmployeeList from '../components/EmployeeList';

const Employee = (props) => {
    const EMP = {
        "Success": [
            {
                "id": "35",
                "name": "saurabh",
                "category": "Web development",
                "categoryid": "1",
                "address": "testing",
                "description": "bhopal",
                "contact": "659856325",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190423_153014.jpg"
            },
            {
                "id": "42",
                "name": "priya",
                "category": "Web development",
                "categoryid": "1",
                "address": "vijaynagar",
                "description": "indore",
                "contact": "9876543212",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190423_153641.jpg"
            },
            {
                "id": "49",
                "name": "priya",
                "category": "Web development",
                "categoryid": "1",
                "address": "vijaynagar",
                "description": "indore",
                "contact": "9876543212",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_110442.jpg"
            },
            {
                "id": "56",
                "name": "heena",
                "category": "Web development",
                "categoryid": "1",
                "address": "abcde",
                "description": "abc",
                "contact": "2145786932",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190419_141056.jpg"
            },
            {
                "id": "57",
                "name": "tiya",
                "category": "Web development",
                "categoryid": "1",
                "address": "hello",
                "description": "indore",
                "contact": "1245785214",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190423_163427.jpg"
            },
            {
                "id": "58",
                "name": "rahul jain",
                "category": "Web development",
                "categoryid": "1",
                "address": "abcds",
                "description": "bhopal",
                "contact": "1245785552",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190423_165008.jpg"
            },
            {
                "id": "60",
                "name": "abc",
                "category": "Web development",
                "categoryid": "1",
                "address": "vsgegw",
                "description": "avgaghs",
                "contact": "4551881488",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190419_175734.jpg"
            },
            {
                "id": "61",
                "name": "d sharma",
                "category": "Web development",
                "categoryid": "1",
                "address": "bhopal",
                "description": "indore",
                "contact": "8259464459",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190423_171414.jpg"
            },
            {
                "id": "62",
                "name": "abcd",
                "category": "Web development",
                "categoryid": "1",
                "address": "bhopal",
                "description": "aba",
                "contact": "5151515155",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190422_141537.jpg"
            },
            {
                "id": "63",
                "name": "abcd",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "abc",
                "contact": "1223455678",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190422_142256.jpg"
            },
            {
                "id": "64",
                "name": "suchi",
                "category": "Web development",
                "categoryid": "1",
                "address": "bhopal",
                "description": "hello",
                "contact": "4524785668",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190422_142638.jpg"
            },
            {
                "id": "65",
                "name": "abhishek",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "indore",
                "contact": "3214567896",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_100403.jpg"
            },
            {
                "id": "66",
                "name": "shreya",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "abc",
                "contact": "2145667889",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/"
            },
            {
                "id": "67",
                "name": "shryansh",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "abc",
                "contact": "4661551929",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/"
            },
            {
                "id": "68",
                "name": "abc",
                "category": "Web development",
                "categoryid": "1",
                "address": "bhopal",
                "description": "ahs",
                "contact": "1662626565",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/"
            },
            {
                "id": "69",
                "name": "priyanka",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "aba",
                "contact": "4664646565",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/"
            },
            {
                "id": "70",
                "name": "aryan",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "abc",
                "contact": "4661512589",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_122642.jpg"
            },
            {
                "id": "73",
                "name": "abhisikta",
                "category": "Web development",
                "categoryid": "1",
                "address": "indore",
                "description": "av",
                "contact": "9656622992",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_140357.jpg"
            },
            {
                "id": "48",
                "name": "priya",
                "category": "SEO",
                "categoryid": "2",
                "address": "indore",
                "description": "vijaynagar",
                "contact": "9876543212",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_115306.jpg"
            },
            {
                "id": "71",
                "name": "saurabh",
                "category": "SEO",
                "categoryid": "2",
                "address": "bhopal",
                "description": "testing",
                "contact": "659856325",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/aryupaylogoimage.png"
            },
            {
                "id": "72",
                "name": "abhi",
                "category": "Digital Marketing",
                "categoryid": "3",
                "address": "abc",
                "description": "hoshangabad",
                "contact": "4651516288",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_135131.jpg"
            },
            {
                "id": "74",
                "name": "abcd",
                "category": "Digital Marketing",
                "categoryid": "3",
                "address": "indore",
                "description": "abs",
                "contact": "6161616621",
                "empcode": "AT0104",
                "image": "http://aryu.co.in/tracking/uploads/IMG_20190424_140552.jpg"
            }
        ]
    }
    return <EmployeeList items={EMP.Success} />
}

export default Employee;