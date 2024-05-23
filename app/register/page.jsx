"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  childname: z.string().min(2),
  dateofbirth: z.string().min(2),
  gender: z.string().min(2),
  interviewnumber: z.string().min(2),
  interviewroomno: z.string().min(2),
  parentsname: z.string().min(2),
  phonenumbers: z.string().min(2),
  religiousdenomination: z.string().min(2),
  romancatholic: z.string().min(2),
  baptismcertificatepresented: z.string().min(2),
  biologicalparent: z.string().min(2),
  address: z.string().min(2),
  biologicalparent: z.string().min(2),
  relationshiptochild: z.string().min(2),
  address: z.string().min(2),
  childstayingWithparents: z.string().min(2),
  bothparentsresponsible: z.string().min(2),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childname: "",
      dateofbirth: "",
      gender: "",
      interviewnumber: "",
      interviewroomno: "",
      parentsname: "",
      phonenumber: "",
      religiousdenomination: "",
      romancatholic: "",
      baptismcertificatepresented: "",
      biologicalparent: "",
      relationshiptochild: "",
      address: "",
      childstayingwithparents: "",
      bothparentsresponsible: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="flex justify-center items-center w-full h-full my-6 px-4">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white px-8 py-8 rounded-md w-[40rem]"
      >
        <h1 className="text-xl text-[#222] mb-8">
          Register to continue to delany academy
        </h1>
        <div className="flex flex-col gap-1 mb-[0.6rem]">
          <label>ChildName</label>
          <input
            type="text"
            {...form.register("childname")}
            placeholder="child name"
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>DateOfBirth</label>
          <input
            type="date"
            {...form.register("dateofbirth")}
            placeholder="date of birth"
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Gender</label>
          <select
            {...form.register("gender")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Interview Number</label>
          <input
            type="number"
            {...form.register("interviewnumber")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Interview Room No</label>
          <input
            type="number"
            {...form.register("interviewroomno")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Parents Name</label>
          <input
            type="text"
            {...form.register("parentname")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
            placeholder="parent name"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Phone Number</label>
          <input
            type="number"
            {...form.register("phonenumber")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
            placeholder="0599495508"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Religious Denomination</label>
          <input
            type="text"
            {...form.register("religiousdenomination")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
            placeholder="catholic church"
          />
        </div>

        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Are You a Catholic</label>
          <select
            {...form.register("romancatholic")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Baptism Certificate Presented</label>
          <select
            {...form.register("baptismcertificatepresented")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Biological Parent</label>
          <select
            {...form.register("biologicalparent")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Relationship To The Child</label>
          <input
            type="text"
            {...form.register("relationshiptothechild")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
            placeholder="optional"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Address</label>
          <input
            type="text"
            {...form.register("address")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
            placeholder="e.g: BIT-0011-2338"
          />
        </div>

        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Is The Child Staying With The Parents?</label>
          <select
            {...form.register("childstayingwithparents")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Are Both Parents Responsible For The Child?</label>
          <select
            {...form.register("bothparentsresponsible")}
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded focus:ring-[2px] focus:ring-blue-700"
          >
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm cursor-pointer px-4 py-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
