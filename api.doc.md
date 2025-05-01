I'll generate API documentation for all schemas. Here's the API documentation:

# Dragon Fruit Smart Garden API Documentation

## Permission API Endpoints

### Get All Permissions
- **URL**: `/api/permissions`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { "_id": "id", "name": "permission_name", "descrpt": "description" }
    ]
  }
  ```

### Get Permission by ID
- **URL**: `/api/permissions/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { "_id": "id", "name": "permission_name", "descrpt": "description" }
  }
  ```

### Create Permission
- **URL**: `/api/permissions`
- **Method**: `POST`
- **Body**: 
  ```json
  { "name": "permission_name", "descrpt": "description" }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Permission created successfully",
    "data": { "_id": "id", "name": "permission_name", "descrpt": "description" }
  }
  ```

### Update Permission
- **URL**: `/api/permissions/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { "name": "updated_name", "descrpt": "updated_description" }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Permission updated successfully",
    "data": { "_id": "id", "name": "updated_name", "descrpt": "updated_description" }
  }
  ```

### Delete Permission
- **URL**: `/api/permissions/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Permission deleted successfully"
  }
  ```

## Role API Endpoints

### Get All Roles
- **URL**: `/api/roles`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { 
        "_id": "id", 
        "rolename": "role_name", 
        "permissions": [
          { "_id": "permission_id", "name": "permission_name", "descrpt": "description" }
        ] 
      }
    ]
  }
  ```

### Get Role by ID
- **URL**: `/api/roles/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "rolename": "role_name", 
      "permissions": [
        { "_id": "permission_id", "name": "permission_name", "descrpt": "description" }
      ] 
    }
  }
  ```

### Create Role
- **URL**: `/api/roles`
- **Method**: `POST`
- **Body**: 
  ```json
  { "rolename": "role_name", "permissions": ["permission_id1", "permission_id2"] }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Role created successfully",
    "data": { "_id": "id", "rolename": "role_name", "permissions": ["permission_id1", "permission_id2"] }
  }
  ```

### Update Role
- **URL**: `/api/roles/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { "rolename": "updated_name", "permissions": ["permission_id1", "permission_id2"] }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Role updated successfully",
    "data": { 
      "_id": "id", 
      "rolename": "updated_name", 
      "permissions": [
        { "_id": "permission_id1", "name": "permission_name", "descrpt": "description" }
      ] 
    }
  }
  ```

### Delete Role
- **URL**: `/api/roles/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Role deleted successfully"
  }
  ```

### Add Permission to Role
- **URL**: `/api/roles/:roleId/permissions/:permissionId`
- **Method**: `POST`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Permission added to role successfully",
    "data": { 
      "_id": "roleId", 
      "rolename": "role_name", 
      "permissions": [
        { "_id": "permission_id", "name": "permission_name", "descrpt": "description" }
      ] 
    }
  }
  ```

### Remove Permission from Role
- **URL**: `/api/roles/:roleId/permissions/:permissionId`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Permission removed from role successfully",
    "data": { 
      "_id": "roleId", 
      "rolename": "role_name", 
      "permissions": [
        { "_id": "other_permission_id", "name": "permission_name", "descrpt": "description" }
      ] 
    }
  }
  ```

## Worker API Endpoints

### Get All Workers
- **URL**: `/api/workers`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { 
        "_id": "id", 
        "name": "worker_name", 
        "role": "role",
        "contact": "contact_info",
        "hireDate": "2023-08-01T00:00:00.000Z",
        "email": "worker@example.com",
        "avatar": "avatar_url"
      }
    ]
  }
  ```

### Get Worker by ID
- **URL**: `/api/workers/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "name": "worker_name", 
      "role": "role",
      "contact": "contact_info",
      "hireDate": "2023-08-01T00:00:00.000Z",
      "email": "worker@example.com",
      "avatar": "avatar_url"
    }
  }
  ```

### Create Worker
- **URL**: `/api/workers`
- **Method**: `POST`
- **Body**: 
  ```json
  { 
    "name": "worker_name", 
    "role": "role",
    "contact": "contact_info",
    "hireDate": "2023-08-01",
    "email": "worker@example.com",
    "password": "password",
    "avatar": "avatar_url"
  }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Worker created successfully",
    "data": { 
      "_id": "id", 
      "name": "worker_name", 
      "role": "role",
      "contact": "contact_info",
      "hireDate": "2023-08-01T00:00:00.000Z",
      "email": "worker@example.com",
      "avatar": "avatar_url"
    }
  }
  ```

### Update Worker
- **URL**: `/api/workers/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { 
    "name": "updated_name", 
    "role": "updated_role",
    "contact": "updated_contact",
    "email": "updated@example.com",
    "avatar": "updated_avatar"
  }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Worker updated successfully",
    "data": { 
      "_id": "id", 
      "name": "updated_name", 
      "role": "updated_role",
      "contact": "updated_contact",
      "hireDate": "2023-08-01T00:00:00.000Z",
      "email": "updated@example.com",
      "avatar": "updated_avatar"
    }
  }
  ```

### Delete Worker
- **URL**: `/api/workers/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Worker deleted successfully"
  }
  ```

## Weather API Endpoints

### Get All Weather Records
- **URL**: `/api/weather`
- **Method**: `GET`
- **Query Parameters**:
  - `startDate`: Filter records starting from this date (optional)
  - `endDate`: Filter records up to this date (optional)
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { 
        "_id": "id", 
        "date": "2023-08-01T00:00:00.000Z", 
        "temperature": 28.5,
        "humidity": 65,
        "rainfall": 0,
        "windSpeed": 5.2
      }
    ]
  }
  ```

### Get Latest Weather Record
- **URL**: `/api/weather/latest`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "date": "2023-08-01T00:00:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "rainfall": 0,
      "windSpeed": 5.2
    }
  }
  ```

### Get Weather by ID
- **URL**: `/api/weather/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "date": "2023-08-01T00:00:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "rainfall": 0,
      "windSpeed": 5.2
    }
  }
  ```

### Create Weather Record
- **URL**: `/api/weather`
- **Method**: `POST`
- **Body**: 
  ```json
  { 
    "date": "2023-08-01",  
    "temperature": 28.5,
    "humidity": 65,
    "rainfall": 0,
    "windSpeed": 5.2
  }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Weather record created successfully",
    "data": { 
      "_id": "id", 
      "date": "2023-08-01T00:00:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "rainfall": 0,
      "windSpeed": 5.2
    }
  }
  ```

### Update Weather Record
- **URL**: `/api/weather/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { 
    "temperature": 29.1,
    "humidity": 68,
    "rainfall": 1.2,
    "windSpeed": 6.5
  }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Weather record updated successfully",
    "data": { 
      "_id": "id", 
      "date": "2023-08-01T00:00:00.000Z", 
      "temperature": 29.1,
      "humidity": 68,
      "rainfall": 1.2,
      "windSpeed": 6.5
    }
  }
  ```

### Delete Weather Record
- **URL**: `/api/weather/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Weather record deleted successfully"
  }
  ```

## Sensor Data API Endpoints

### Get All Sensor Data
- **URL**: `/api/sensordata`
- **Method**: `GET`
- **Query Parameters**:
  - `startDate`: Filter records starting from this date (optional)
  - `endDate`: Filter records up to this date (optional)
  - `page`: Page number for pagination (default: 1)
  - `limit`: Number of records per page (default: 100)
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { 
        "_id": "id", 
        "timestamp": "2023-08-01T14:25:00.000Z", 
        "temperature": 28.5,
        "humidity": 65,
        "soilMoisture": 40
      }
    ],
    "pagination": {
      "total": 235,
      "page": 1,
      "limit": 100,
      "pages": 3
    }
  }
  ```

### Get Latest Sensor Data
- **URL**: `/api/sensordata/latest`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "timestamp": "2023-08-01T14:25:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "soilMoisture": 40
    }
  }
  ```

### Get Sensor Data Statistics
- **URL**: `/api/sensordata/stats`
- **Method**: `GET`
- **Query Parameters**:
  - `startDate`: Filter statistics starting from this date (optional)
  - `endDate`: Filter statistics up to this date (optional)
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "avgTemperature": 27.8,
      "avgHumidity": 63.5,
      "avgSoilMoisture": 42.1,
      "maxTemperature": 32.4,
      "minTemperature": 22.1,
      "maxHumidity": 85,
      "minHumidity": 45,
      "maxSoilMoisture": 80,
      "minSoilMoisture": 20,
      "count": 235
    }
  }
  ```

### Get Sensor Data by ID
- **URL**: `/api/sensordata/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "timestamp": "2023-08-01T14:25:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "soilMoisture": 40
    }
  }
  ```

### Create Sensor Data Record
- **URL**: `/api/sensordata`
- **Method**: `POST`
- **Body**: 
  ```json
  { 
    "timestamp": "2023-08-01T14:25:00.000Z", 
    "temperature": 28.5,
    "humidity": 65,
    "soilMoisture": 40
  }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Sensor data record created successfully",
    "data": { 
      "_id": "id", 
      "timestamp": "2023-08-01T14:25:00.000Z", 
      "temperature": 28.5,
      "humidity": 65,
      "soilMoisture": 40
    }
  }
  ```

### Update Sensor Data Record
- **URL**: `/api/sensordata/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { 
    "temperature": 29.2,
    "humidity": 67,
    "soilMoisture": 45
  }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Sensor data record updated successfully",
    "data": { 
      "_id": "id", 
      "timestamp": "2023-08-01T14:25:00.000Z", 
      "temperature": 29.2,
      "humidity": 67,
      "soilMoisture": 45
    }
  }
  ```

### Delete Sensor Data Record
- **URL**: `/api/sensordata/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Sensor data record deleted successfully"
  }
  ```

## Sensor API Endpoints

### Get All Sensors
- **URL**: `/api/sensors`
- **Method**: `GET`
- **Query Parameters**:
  - `sensorType`: Filter by sensor type (optional)
  - `status`: Filter by status (optional)
  - `location`: Filter by location (optional)
- **Response**: 
  ```json
  {
    "status": 200,
    "data": [
      { 
        "_id": "id", 
        "sensorType": "temperature", 
        "location": "greenhouse-1",
        "status": "active"
      }
    ]
  }
  ```

### Get Sensor by ID
- **URL**: `/api/sensors/:id`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": 200,
    "data": { 
      "_id": "id", 
      "sensorType": "temperature", 
      "location": "greenhouse-1",
      "status": "active"
    }
  }
  ```

### Create Sensor
- **URL**: `/api/sensors`
- **Method**: `POST`
- **Body**: 
  ```json
  { 
    "sensorType": "soil-moisture", 
    "location": "field-3",
    "status": "active"
  }
  ```
- **Response**: 
  ```json
  {
    "status": 201,
    "message": "Sensor created successfully",
    "data": { 
      "_id": "id", 
      "sensorType": "soil-moisture", 
      "location": "field-3",
      "status": "active"
    }
  }
  ```

### Update Sensor
- **URL**: `/api/sensors/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  { 
    "sensorType": "soil-moisture", 
    "location": "greenhouse-2",
    "status": "active"
  }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Sensor updated successfully",
    "data": { 
      "_id": "id", 
      "sensorType": "soil-moisture", 
      "location": "greenhouse-2",
      "status": "active"
    }
  }
  ```

### Update Sensor Status
- **URL**: `/api/sensors/:id/status`
- **Method**: `PATCH`
- **Body**: 
  ```json
  { 
    "status": "inactive"
  }
  ```
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Sensor status updated successfully",
    "data": { 
      "_id": "id", 
      "sensorType": "soil-moisture", 
      "location": "greenhouse-2",
      "status": "inactive"
    }
  }
  ```

### Delete Sensor
- **URL**: `/api/sensors/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "status": 200,
    "message": "Sensor deleted successfully"
  }
  ```
