"use client";

import React, { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    gender: "",
    parentName: "",
    phoneNumber: "",
    religiousDenomination: "",
    romanCatholicBaptised: "",
    biologicalParent: "",
    relationshipToChild: "",
    residenceAddress: "",
    stayingWithParent: "",
    bothParentsResponsible: "",
    siblingsInSchool: "",
    siblingClass: "",
    birthCertificateOriginal: "",
    parentSignature: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="my-[2rem] mx-[5rem] bg-white px-4 py-4 rounded-md">
      <h2 className="mb-4 font-bold text-[1.5rem]">
        Student Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="input_group">
          {/* Child's Name */}
          <div className="lable">
            <label htmlFor="childName">Child's Name:</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input_group">
          {/* Date of Birth */}
          <div className="lable">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
          </div>
          <div className="input">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input_group">
          {/* Gender */}
          <div className="label">
            <label>Gender:</label>
          </div>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="input_group">
          {/* Parent's Name */}
          <div className="lable">
            <label htmlFor="parentName">Parent's Name:</label>
          </div>
          <div className="lable">
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input_group">
          {/* Phone Number */}
          <div className="label">
            <label htmlFor="phoneNumber">Phone Number:</label>
          </div>
          <div className="input">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input_group">
          {/* Religious Denomination */}
          <div className="label">
            <label htmlFor="religiousDenomination">
              Religious Denomination:
            </label>
          </div>
          <div className="input">
            <input
              type="text"
              id="religiousDenomination"
              name="religiousDenomination"
              value={formData.religiousDenomination}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input_group">
          {/* Roman Catholic Baptised */}
          <div className="label">
            <label htmlFor="romanCatholicBaptised">
              Roman Catholic Baptised:
            </label>
          </div>
          <div className="input">
            <select
              id="romanCatholicBaptised"
              name="romanCatholicBaptised"
              value={formData.romanCatholicBaptised}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Biological Parent */}
          <div className="lable">
            <label htmlFor="biologicalParent">Biological Parent:</label>
          </div>
          <div className="input">
            <select
              id="biologicalParent"
              name="biologicalParent"
              value={formData.biologicalParent}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Relationship to Child */}
          <div className="lable">
            <label htmlFor="relationshipToChild">Relationship to Child:</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="relationshipToChild"
              name="relationshipToChild"
              value={formData.relationshipToChild}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input_group">
          {/* Residence Address */}
          <div className="lable">
            <label htmlFor="residenceAddress">Residence Address:</label>
          </div>
          <div className="input">
            <textarea
              id="residenceAddress"
              name="residenceAddress"
              value={formData.residenceAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="input_group">
          {/* Staying with Parent */}
          <div className="lable">
            <label htmlFor="stayingWithParent">Staying with Parent:</label>
          </div>
          <div className="input">
            <select
              id="stayingWithParent"
              name="stayingWithParent"
              value={formData.stayingWithParent}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Both Parents Responsible */}
          <div className="label">
            <label htmlFor="bothParentsResponsible">
              Both Parents Responsible:
            </label>
          </div>
          <div className="input">
            <select
              id="bothParentsResponsible"
              name="bothParentsResponsible"
              value={formData.bothParentsResponsible}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Siblings in School */}
          <div className="label">
            <label htmlFor="siblingsInSchool">Siblings in School:</label>
          </div>
          <div className="input">
            <select
              id="siblingsInSchool"
              name="siblingsInSchool"
              value={formData.siblingsInSchool}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Sibling Class */}
          <div className="label">
            <label htmlFor="siblingClass">Sibling Class (if applicable):</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="siblingClass"
              name="siblingClass"
              value={formData.siblingClass}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input_group">
          {/* Birth Certificate Original */}
          <div className="label">
            <label htmlFor="birthCertificateOriginal">
              Birth Certificate Original:
            </label>
          </div>
          <div className="input">
            <select
              id="birthCertificateOriginal"
              name="birthCertificateOriginal"
              value={formData.birthCertificateOriginal}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="input_group">
          {/* Parent's Signature */}
          <div className="label">
            <label htmlFor="parentSignature">Parent's Signature:</label>
          </div>
          <div className="input">
            <input
              type="file"
              id="parentSignature"
              name="parentSignature"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input_group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
