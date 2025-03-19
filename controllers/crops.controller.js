const { default: mongoose } = require('mongoose');
const Crop = require('../models/crops.model');


// [GET] /crops
module.exports.index = async (req, res) => {
    // const filterStatus = filterHelper(req.query);
    // const searchStatus = searchHelper(req.query);

    // let pagination = {
    //     limitItems: 7,
    //     currentPage: 1,
    //     skip: 0
    // }


    const find = {
        deleted: false
    }
    // //console.log(searchStatus);
    // if(req.query.status){
    //     find.status = req.query.status;
    // }
    // if(searchStatus.regex){
    //     find.title = searchStatus.regex;
    // }

    // const sorted = {};
    // if(req.query.sortVal){
    //     sorted[req.query.sortKey] = req.query.sortVal;
    // }
    // else{
    //     sorted.position = 'desc';
    // }
    // //console.log(req.query.search_query);

    // if(req.query.page){
    //     pagination.currentPage = parseInt(req.query.page);
    // }

    // let total =  await Crop.countDocuments(find);
    // pagination.totalPages = Math.ceil(total / pagination.limitItems);
    // pagination.skip = (pagination.currentPage - 1) * pagination.limitItems;
    //console.log(pagination.totalPages);

    let crops = await Crop.find(find)
    // .limit(pagination.limitItems)
    // .skip(pagination.skip)
    // .sort(sorted);

    res.json({
        status: 200,
        crops,
        // filterStatus: filterStatus,
        // find: searchStatus.keyword,
        // pagination: pagination
    });
}

// [GET] /crops/:id
module.exports.GetCropsById = async (req, res) => {
    console.log(req.params);
    try {
        const crop = await Crop.findOne({
            _id: req.params.id,
            deleted: false,
        });
        res.json({
            status: 200,
            crop
        });
    } catch (error) {
        return res.status(404).json({
            status: 404,
            message: 'Crop not found',
        });
    }
}

// [GET] /crops/slug/:slug
module.exports.GetCropsBySlug = async (req, res) => {
    try {
        const crop = await Crop.findOne({
            slug: req.params.slug,
            deleted: false,
        });

        if (!crop) {
            return res.status(404).json({
                status: 404,
                message: 'Crop Not Found',
            });
        }
        res.json({
            status: 200,
            crop
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error',
        });
    }
}

// [PATCH] /crops/edit/:id
module.exports.EditCrop = async (req, res) => {
    try {
        const crop = await Crop.updateOne({ _id: req.params.id }, {
            ...req.body,
        });
        res.json({
            status: 200,
            crop
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error',
        });
    }
}

//[POST]/crops/create
module.exports.CreateCrop = async (req, res) => {
    const newCrop = new Crop(req.body);
    try {
        await newCrop.save();
        res.send({
            status: 201,
            message: 'Crop created successfully'
        })
    }
    catch (err) {
        console.log(err);
        res.send({
            status: 500,
            message: 'Crop created fail',
        })
    }

};

//[PATCH] /crops/delete
module.exports.DeleteCrop = async (req, res) => {
    try {
        const deletedCrops = await Crop.updateMany({
            _id: { $in: req.body.ids.map(id => new mongoose.Types.ObjectId(id)) },
            deleted: false
        },
            { deleted: true });

        if (!deletedCrops) {
            return res.status(404).json({ status: 404, message: "Crop not found" });
        }

        res.status(200).json({
            status: 200,
            message: "Crops deleted successfully",
            data: deletedCrops
        });

    } catch (error) {
        console.error("Error deleting crop:", error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};

//[PATCH] /crops/restore
module.exports.RestoreCrop = async (req, res) => {
    try {
        const deletedCrops = await Crop.updateMany({
            _id: { $in: req.body.ids.map(id => new mongoose.Types.ObjectId(id)) },
            deleted: true
        },
            { deleted: false });

        if (!deletedCrops) {
            return res.status(404).json({ status: 404, message: "Crop not found" });
        }

        res.status(200).json({
            status: 200,
            message: "Crops restored successfully",
            data: deletedCrops
        });

    } catch (error) {
        console.error("Error deleting crop:", error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};

//[DELETE] /crops/delet-forever
module.exports.DeleteForeverCrop = async (req, res) => {
    try {
        const deletedCrops = await Crop.deleteMany({
            _id: { $in: req.body.ids.map(id => new mongoose.Types.ObjectId(id)) },
        });

        if (!deletedCrops) {
            return res.status(404).json({ status: 404, message: "Crop not found" });
        }

        res.status(200).json({
            status: 200,
            message: "Crops deleted successfully",
            data: deletedCrops
        });

    } catch (error) {
        console.error("Error deleting crop:", error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
