const asyncHandler = require('express-async-handler');
const validator = require('validator');
const { checkEmpty } = require('../utils/checkEmpty');
const Contact = require('../models/Contact');

// Create a new contact message
exports.createContact = asyncHandler(async (req, res) => {
    const { fullName, email, mobile, message } = req.body;
<<<<<<< HEAD

=======
    // Basic validation
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    const { isError, error } = checkEmpty({ fullName, email, mobile, message });
    if (isError) return res.status(400).json({ message: "All fields are required", error });

    if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid Email" });
    if (!validator.isMobilePhone(mobile.toString(), "en-IN")) return res.status(400).json({ message: "Invalid Mobile Number" });

    const newContact = await Contact.create({ fullName, email, mobile, message });
    res.status(201).json({ message: "Contact message created successfully", data: newContact });
});

<<<<<<< HEAD
// Get all contact messages 
exports.getContacts = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contact.find();


        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }


        res.status(200).json({
            message: "All contacts fetched successfully",
            total: contacts.length,
            data: contacts
        });

    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ message: "Server error" });
    }
});


=======
// Get all contact messages with search, filter, sort, pagination, and field selection
exports.getContacts = asyncHandler(async (req, res) => {
    // Extract query params
    let { page = 1, limit = 10, sort = '-createdAt', fields, search } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // Build filter object
    const filter = {};
    if (search) {
        // Regex for case-insensitive search
        const searchRegex = { $regex: search, $options: 'i' };
        filter.$or = [
            { fullName: searchRegex },
            { email: searchRegex },
            { message: searchRegex },
            // For mobile, only exact match if numeric
            ...(validator.isNumeric(search) ? [{ mobile: search }] : [])
        ];
    }

    // Build sort object
    const sortObj = {};
    sort.split(',').forEach(item => {
        const [key, order = 'asc'] = item.split(':');
        sortObj[key] = order === 'asc' ? 1 : -1;
    });

    // Field selection
    const selectFields = fields ? fields.split(',').join(' ') : '';

    // Fetch data with pagination
    const contacts = await Contact.find(filter)
        .sort(sortObj)
        .select(selectFields)
        .skip((page - 1) * limit)
        .limit(limit);

    const totalCount = await Contact.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
        data: contacts,
        meta: {
            totalItems: totalCount,
            totalPages,
            currentPage: page,
            itemsPerPage: limit,
            sortBy: sortObj,
            filterApplied: search || null
        }
    });
});

// Get single contact message by ID
exports.getContactById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.json({ data: contact });
});

// Update a contact message
exports.updateContact = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { fullName, email, mobile, message } = req.body;

    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    if (fullName) contact.fullName = fullName;
    if (email) {
        if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid Email" });
        contact.email = email;
    }
    if (mobile) {
        if (!validator.isMobilePhone(mobile.toString(), "en-IN")) return res.status(400).json({ message: "Invalid Mobile Number" });
        contact.mobile = mobile;
    }
    if (message) contact.message = message;

    await contact.save();
    res.json({ message: "Contact updated successfully", data: contact });
});

// Delete a contact message
exports.deleteContact = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    console.log(contact)
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    // await contact.remove();
    await Contact.findByIdAndDelete(id);
    res.json({ message: "Contact deleted successfully" });
});

exports.markAsRead = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Find the contact by ID
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    // Update read status
    contact.read = true;
    await contact.save();

    res.json({ message: "Contact marked as read", data: contact });
});
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
