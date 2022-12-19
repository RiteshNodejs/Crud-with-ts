const jsonValidate={
    "$id": "/all", 
    "title": "Root", 
    "type": "object",
    "required": [
        "firstName",
        "lastName",
        "userName",
        "email",
        "password",
        "organization"
    ],
    "properties": {
        "firstName": {
            "$id": "#root/firstName", 
            "title": "Firstname", 
            "type": "string",
            "examples": [
                "test 1.7"
            ],
            "pattern": "^.*$"
        },
        "lastName": {
            "$id": "#root/lastName", 
            "title": "Lastname", 
            "type": "string",
            "examples": [
                "ts"
            ],
            "pattern": "^.*$"
        },
        "userName": {
            "$id": "#root/userName", 
            "title": "Username", 
            "type": "string",
            "examples": [
                "test 1.7"
            ],
            "pattern": "^.*$"
        },
        "email": {
            "$id": "#root/email", 
            "title": "Email", 
            "type": "string",
            "examples": [
                "ts@ok.com"
            ],
            "pattern": "^.*$"
        },
        "password": {
            "$id": "#root/password", 
            "title": "Password", 
            "type": "string",
            "examples": [
                "12345678"
            ],
            "pattern": "^.*$"
        },
        "organization": {
            "$id": "#root/organization", 
            "title": "Organization",
            "required": [
                "orgName"
            ],
            "properties": {
                "orgName": {
                    "$id": "#root/organization/orgName", 
                    "title": "Orgname", 
                    "type": "string",
                    "examples": [
                        "test"
                    ],
                    "pattern": "^.*$"
                },
                "address": {
                    "$id": "#root/organization/address", 
                    "title": "Address", 
                    "type": "object",
                    "required": [
                        "addressLine1",
                        "addressLine2",
                        "orgNo",
                        "city",
                        "state",
                        "country",
                        "zipCode"
                    ],
                    "properties": {
                        "addressLine1": {
                            "$id": "#root/organization/address/addressLine1", 
                            "title": "Addressline1", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "abc"
                            ],
                            "pattern": "^.*$"
                        },
                        "addressLine2": {
                            "$id": "#root/organization/address/addressLine2", 
                            "title": "Addressline2", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "abc"
                            ],
                            "pattern": "^.*$"
                        },
                        "orgNo": {
                            "$id": "#root/organization/address/orgNo", 
                            "title": "Orgno", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "121"
                            ],
                            "pattern": "^.*$"
                        },
                        "city": {
                            "$id": "#root/organization/address/city", 
                            "title": "City", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "ddd"
                            ],
                            "pattern": "^.*$"
                        },
                        "state": {
                            "$id": "#root/organization/address/state", 
                            "title": "State", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "eff"
                            ],
                            "pattern": "^.*$"
                        },
                        "country": {
                            "$id": "#root/organization/address/country", 
                            "title": "Country", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "dds"
                            ],
                            "pattern": "^.*$"
                        },
                        "zipCode": {
                            "$id": "#root/organization/address/zipCode", 
                            "title": "Zipcode", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "sds"
                            ],
                            "pattern": "^.*$"
                        }
                    }
                }

            }
        }

    } 

}

export default jsonValidate