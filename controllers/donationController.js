const donationModel = require("../models/donationModel")


const DonationController = {
  // Create a new donation item
  createDonation: async (req, res) => {
    try {
      const newdonationItem = new donationModel(req.body);
      const savedItem = await newdonationItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Edit an donation item by ID
  editDonationById: async (req, res) => {
    try {
      const updatedItem = await donationModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
      );
      if (!updatedItem) {
        return res.status(404).json({ message: 'donation item not found' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete an donation item by ID
  deleteDonationById: async (req, res) => {
    try {
      const deletedItem = await donationModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'donation item not found' });
      }
      res.json({ message: 'donation item deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Find an donation item by email
  findDonationByEmail: async (req, res) => {
    try {
      const items = await donationModel.find({ userEmail: req.params.email });
      if (items.length === 0) {
        return res.status(404).json({ message: 'No donation items found for this email' });
      }
      res.json(items);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Find all donation items
  findAlldonation: async (req, res) => {
    try {
      const items = await donationModel.find({});
      res.json(items);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = DonationController;
