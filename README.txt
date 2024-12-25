# end point => /contact-us-details

* get method to retrieve data =>
{
    "message": "Contact us details retrieved successfully.",
    "contactUsDetails": {
        "_id": "676062fc42c4fd27690505ba",
        "phoneNumber": "1800000000",
        "address": "Gomti Nagar Lucknow 226010Address",
        "__v": 0
    }
}

* patch method to update data =>
{
    id : String 
    phoneNumber : String => length: 10-15
    address : String
}


# end point => /partners

* get method to retrieve data => 
{
    "message": "Partners retrieved successfully",
    "data": [
        {
            "_id": "67624bbf1abf3ba86bdcb372",
            "partnerName": "Man Kind",
            "partnerLogo": "https://hblsjtkjnvjfskdkvhsoihgiehgsnv34vm/mankind.jpg",
            "__v": 0
        },
        {
            "_id": "67624eab795f8e8874a0d98c",
            "partnerName": "Sunpharma",
            "partnerLogo": "https://hblsjtkjnvjfskdkvhsoihgiehgsnv34vn/sunpharma.jpg",
            "__v": 0
        }
    ]
}

* post method to create data =>
	{
		partnerName: String
		partnerLogo: url in String
	}

* patch method to update data =>
	{
		id: String
		partnerName: String
		partnerLogo: url in String
	}

* delete method to delete data => 
	{
		id: String
	}


# end point => /team

* get method to retrieve data => 
{
    "message": "Team retrieved successfully",
    "data": [
        {
            "socialMediaLinks": {
                "insta": "http://www.instagram/jdsfghoiuenve.com",
                "facebook": "http://www.facebook/jslkhgoievm.com",
                "x": "http://www.x/jfshjievm.com",
                "linkedin": "http://www.linkedin/vnslenvgelji.com"
            },
            "_id": "6762e96f203ba23519a6b708",
            "name": "Pranjal Gogoi",
            "designation": "Developer",
            "userPhoto": "http://fjklsjoinvehtln34nlkfnsi.jpg",
            "__v": 0
        },
        {
            "socialMediaLinks": {
                "insta": "http://www.instagram/jdsfghoiuenve.com",
                "facebook": "http://www.facebook/jslkhgoievm.com",
                "x": "http://www.x/jfshjievm.com",
                "linkedin": "http://www.linkedin/vnslenvgelji.com"
            },
            "_id": "6762ef81167df5ee0b987734",
            "name": "Akshay Kalhane",
            "designation": "Developer 2",
            "userPhoto": "http://fjklsjoinvehtln34nlkfnsi.jpg",
            "__v": 0
        }
    ]
}

* post method to create data =>
{    
    "name" : String
    "designation": String
    "userPhoto": url in String
    "socialMediaLinks": {
        "insta": url in String
        "facebook": url in String
        "x": url in String
        "linkedin": url in String
    }
}

* patch method to update data => 
{    
    "id": String
    "name" : String
    "designation": String
    "userPhoto": url in String
    "socialMediaLinks": {
        "insta": url in String
        "facebook": url in String
        "x": url in String
        "linkedin": url in String
    }
}

* delete method to delete data =>
{
    "id": String
}


# end point => /testimonials

* get method to retrieve data => 
{
    "message": "Testimonial fetched successfully",
    "data": [
        {
            "_id": "676301d4e4f910588a2a5934",
            "userName": "Pranjal Gogoi",
            "userPhoto": "http://www.photo/jlshoijnvkmnslkhtg.jpg",
            "testimonial": "awesome products",
            "designation": "Founder@Firsttech",
            "companyName": "Firstech",
            "__v": 0
        },
        {
            "_id": "67630215e4f910588a2a5937",
            "userName": "Hitesh Chaudhary",
            "userPhoto": "http://www.photo/jlshoijnvkmnslkhtg.jpg",
            "testimonial": "bad products",
            "designation": "Founder@ChaiAur",
            "companyName": "ChaiAurCode",
            "__v": 0
        }
    ]
}

* post method to create data =>
{    
    "userName": String
    "userPhoto": url in String
    "testimonial": String
    "designation": String
    "companyName": String
}

* patch method to update data => 
{    
    "id": String
    "userName": String
    "userPhoto": url in String
    "testimonial": String
    "designation": String
    "companyName": String
}

* delete method to delete data => 
{
    "id": String
}


# end point => /careers

* get method to retrieve data => 
{
    "message": "Careers retrieved successfully",
    "data": [
        {
            "_id": "67631e9a9268053fc000bce0",
            "title": "Developer",
            "thumbnailImage": "http://jfaslkjhioj.jpg",
            "requirements": [
                "one",
                "two",
                "three"
            ],
            "__v": 0
        },
        {
            "_id": "67631ee19268053fc000bce4",
            "title": "Designer",
            "thumbnailImage": "http://jfaslkjhioj.jpg",
            "requirements": [
                "four",
                "two",
                "three"
            ],
            "__v": 0
        }
    ]
}

* post method to create data =>
{
   "title": String
   "thumbnailImage": url in String
   "requirements": Array of Strings
}

* patch method to update data => 
{
   "id": String
   "title": String
   "thumbnailImage": url in String
   "requirements": Array of Strings
}

* delete method to delete data => 
{
    "id": String
}
