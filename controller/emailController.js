import PeopleModel from "../models/peopleModel.js"
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
})

export const saveToEmail = async (req, res) => {
    const { selectedIDs } = req.body;
    if (!selectedIDs) { return res.status(401).json({ show: "server error" }) }

    const result = await PeopleModel.find({ _id: selectedIDs })
    
    const rows = result.map(item => {
        return (
            `<tr>
                <td>${item.name}</td>
                <td>${item.ph}</td>
                <td>${item.email}</td>
                <td>${item.hobbies}</td>
            </tr>`
        )
    })

    const HTML = `<html>
                        <head>
                             <style>
                                table {
                                font - family: arial, sans-serif;
                                border-collapse: collapse;
                                width: 100%;
                                }

                                td, th {
                                border: 3px solid black;
                                text-align: left;
                                padding: 8px;
                                }

                                tr:nth-child(even) {
                                 background - color: #dddddd;
                                 }
                             </style>
                        </head>
                        <body>

                            <h2>selected persons</h2>

                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Hobbies</th>
                                </tr>
                                ${rows}
                            </table>

                        </body>
                    </html>`

    var mailOptions = {
        from: process.env.USER_EMAI,
        to: 'info@redopositive.in',
        subject: 'sending Emails from node',
        html: HTML
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            return res.status(401).json({ show: "failed" })
        }
        else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ show: "gg" })
        }
    })
    res.status(401).json({ show: "failed" })    
}


