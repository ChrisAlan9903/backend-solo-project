const Vendors = require("../models/Vendors");

async function getAllVendors(req, res) {
  try {
    const vendors = await Vendors.findAll();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getVendorById(req, res) {
  try {
    const vendors = await Vendors.findByPk(parseInt(req.params.vendorId));
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createVendor(req, res) {
  try {
    const createVendor = await Vendors.create({
      ...req.body,
    });
    res.json(createVendor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateVendor(req, res) {
  try {
    const updateVendor = await Vendors.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.vendorId),
        },
      }
    );
    res.json(updateVendor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteVendor(req, res) {
  try {
    const deleteVendor = await Vendors.destroy({
      where: {
        id: parseInt(req.params.vendorId),
      },
    });
    res.json(deleteVendor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
};
