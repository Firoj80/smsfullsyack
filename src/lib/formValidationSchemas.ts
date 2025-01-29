import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),

  name: z.string().min(1, { message: "Subject name is required!" }),

  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),

  name: z.string().min(1, { message: "Class name is required!" }),

  capacity: z.coerce.number().min(1, { message: "Capacity is required!" }),

  gradeId: z.coerce.number().min(1, { message: "Grade ID is required!" }),

  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),

  username: z

    .string()

    .min(3, { message: "Username must be at least 3 characters long!" })

    .max(20, { message: "Username must be at most 20 characters long!" }),

  password: z

    .string()

    .min(8, { message: "Password must be at least 8 characters long!" })

    .optional()

    .or(z.literal("")),

  name: z.string().min(1, { message: "First name is required!" }),

  surname: z.string().min(1, { message: "Last name is required!" }),

  email: z

    .string()

    .email({ message: "Invalid email address!" })

    .optional()

    .or(z.literal("")),

  phone: z.string().optional(),

  address: z.string(),

  img: z.string().optional(),

  bloodType: z.string().min(1, { message: "Blood Group is required!" }),

  joiningDate: z.coerce.date({ message: "Joining Date is required!" }),

  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),

  subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const announcementSchema = z.object({
  id: z.string().optional(),
  
  title: z.string().min(1, { message: "Title is required!" }),
  
  description: z.string().min(1, { message: "Description is required!" }),
  
  startDate: z.coerce.date({ message: "Start Date is required!" }),

  endDate: z.coerce.date({ message: "End Date is required!" }),

  img: z.string().optional(),
});
export type AnnouncementSchema = z.infer<typeof announcementSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),

  address: z.string(),

  img: z.string().optional(),

  bloodType: z.string().min(1, { message: "Blood Type is required!" }),

  birthday: z.coerce.date({ message: "Birthday is required!" }),

  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),

  gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),

  classId: z.coerce.number().min(1, { message: "Class is required!" }),

  parentNId: z.number().min(1, { message: "Parent NID must be a positive number" }),
  parentName: z.string(),

});

export type StudentSchema = z.infer<typeof studentSchema>;

export const lessonSchema = z.object({
  id: z.number().optional(),

  name: z.string().min(1, "Name is required"),

  day: z.enum([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ]),

  startTime: z.string().min(1, "Start time is required"),

  endTime: z.string().min(1, "End time is required"),

  subjectId: z.number(),

  classId: z.number(),

  teacherId: z.string(),
});

export type LessonSchema = z.infer<typeof lessonSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),

  title: z.string().min(1, { message: "Title name is required!" }),

  startTime: z.coerce.date({ message: "Start time is required!" }),

  endTime: z.coerce.date({ message: "End time is required!" }),

  lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;

export const parentSchema = z.object({
  id: z.string().optional(),

  username: z.string().min(1, "Username is required"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),

  name: z.string().min(1, "First name is required"),

  surname: z.string().min(1, "Last name is required"),

  phone: z.string().nullable().optional(), // Allow null

  address: z.string().nullable().optional(), // Allow null

  // Add any other fields as necessary
});

export type ParentSchema = z.infer<typeof parentSchema>;
