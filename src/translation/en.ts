import {
  Award,
  Facebook,
  FilePenLine,
  Flag,
  Heart,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rss,
  School,
  Trophy,
  Twitter,
  UserPlus,
  UserRoundPen,
  Users,
  Volleyball,
} from "lucide-react";

const en = {
  schoolName: "Global Talent School & College",
  navItems: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teachers", href: "#teachers" },
    { name: "Why Us", href: "#why" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    fixedTitle: "A Complete Education Journey From",
    typingTitles: [
      "Class 6 to College",

      "Foundation to Future",

      "Learning to Leadership",
    ],
    subtitle:
      "We provide quality education with experienced teachers and modern facilities.",
    cta: "Apply for Admission",
  },
  about: {
    title: "About our School",
    subTitle:
      "Building a bright future through quality education, discipline, and care in a safe learning environment.",
    cards: [
      {
        Icon: Heart,
        title: "Clean Environment",
        des: "Our school ensures a clean, healthy, and hygienic environment that supports students’ physical and mental well-being.",
      },
      {
        Icon: Volleyball,
        title: "Big Playground & Area",
        des: "A large playground and open area allow students to play freely, stay active, and develop teamwork skills.",
      },
      {
        Icon: School,
        title: "Well-Arranged Rooms",
        des: "Classrooms are well-arranged, comfortable, and student-friendly to create a focused and positive learning experience.",
      },
    ],
  },
  aboutVideoContent: {
    title: "Our School with video",
    subTitle: "Discover our learning environment and facilities.",
    des: "Our school provides a safe, nurturing, and clean environment where students can thrive both academically and personally. With experienced teachers, well-equipped classrooms, modern laboratories, and recreational facilities, we ensure holistic development. Students are encouraged to explore, ask questions, and develop critical thinking. Our focus is not only on academic excellence but also on character building, creativity, and teamwork. The school environment fosters curiosity, confidence, and a love for learning, preparing every student to face future challenges with skill and resilience.",
    points: [
      {
        icon: Leaf,
        text: "Eco-friendly and clean campus.",
      },
      {
        icon: Rss,
        text: "Interactive learning with modern technology.",
      },
      {
        icon: Flag,
        text: "Wide playground and open areas.",
      },
    ],
    videoThumbnail: "/images/about/thumbnail.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  info: {
    bgImg: "/images/about/bg.jpg",
    title: "Some Facts of our School",
    subTitle:
      "Our school has been shaping young minds with quality education, discipline, and modern learning facilities for years.",
    stats: [
      {
        Icon: Users,
        title: 150,
        subtitle: "Students",
      },
      {
        Icon: UserRoundPen,
        title: 100,
        subtitle: "Teachers",
      },

      { Icon: UserPlus, title: 700, subtitle: "Avarage A+" },
      {
        Icon: FilePenLine,
        title: 100,
        percentage: true,
        subtitle: "Pass Rate",
      },
      { Icon: School, title: 50, subtitle: "Rooms" },
      { Icon: Trophy, title: 263, subtitle: "Awards" },
    ],
  },
  teacherSection: {
    title: "Our Expert Teachers",
    subTitle:
      "Meet our team of highly qualified and experienced teachers who are dedicated to guiding students toward academic excellence and personal growth.",
    teachers: [
      {
        name: "Laila Noor",
        designation: "Chemistry Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Laila Noor is an experienced chemistry teacher who focuses on practical learning and student engagement in the classroom.",
        skills: [
          { name: "Mathematic Skill", value: 80 },
          { name: "Chemistry Skill", value: 90 },
          { name: "Physics Skill", value: 70 },
          { name: "Biology Skill", value: 60 },
        ],
      },
      {
        name: "Rahim Uddin",
        designation: "Physics Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Rahim Uddin has a strong background in physics and enjoys making complex concepts simple for students.",
        skills: [
          { name: "Mathematic Skill", value: 85 },
          { name: "Physics Skill", value: 92 },
          { name: "Chemistry Skill", value: 65 },
          { name: "ICT Skill", value: 70 },
        ],
      },
      {
        name: "Nusrat Jahan",
        designation: "Biology Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Nusrat Jahan specializes in biology and encourages curiosity-based learning among students.",
        skills: [
          { name: "Biology Skill", value: 93 },
          { name: "Chemistry Skill", value: 72 },
          { name: "Mathematic Skill", value: 60 },
          { name: "Physics Skill", value: 65 },
        ],
      },
      {
        name: "Arif Hasan",
        designation: "Mathematics Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Arif Hasan is passionate about mathematics and problem-solving techniques for academic excellence.",
        skills: [
          { name: "Mathematic Skill", value: 95 },
          { name: "Physics Skill", value: 78 },
          { name: "ICT Skill", value: 80 },
          { name: "Chemistry Skill", value: 60 },
        ],
      },
      {
        name: "Farzana Akter",
        designation: "English Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Farzana Akter focuses on improving students’ communication, grammar, and confidence in English.",
        skills: [
          { name: "English Skill", value: 94 },
          { name: "Presentation Skill", value: 85 },
          { name: "Creative Writing", value: 80 },
          { name: "Class Management", value: 88 },
        ],
      },
      {
        name: "Imran Hossain",
        designation: "ICT Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Imran Hossain teaches information technology with a practical and project-based approach.",
        skills: [
          { name: "ICT Skill", value: 96 },
          { name: "Programming", value: 85 },
          { name: "Problem Solving", value: 82 },
          { name: "Mathematic Skill", value: 70 },
        ],
      },
      {
        name: "Sadia Rahman",
        designation: "Bangla Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Sadia Rahman is dedicated to teaching Bangla literature and grammar with creativity and care.",
        skills: [
          { name: "Bangla Grammar", value: 92 },
          { name: "Literature", value: 88 },
          { name: "Creative Writing", value: 85 },
          { name: "Presentation Skill", value: 80 },
        ],
      },
      {
        name: "Tanvir Ahmed",
        designation: "General Science Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Tanvir Ahmed combines multiple science disciplines to create a strong foundation for students.",
        skills: [
          { name: "Physics Skill", value: 80 },
          { name: "Chemistry Skill", value: 78 },
          { name: "Biology Skill", value: 75 },
          { name: "Mathematic Skill", value: 70 },
        ],
      },
      {
        name: "Maliha Islam",
        designation: "Social Science Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Maliha Islam teaches social studies with real-world examples and interactive discussions.",
        skills: [
          { name: "History", value: 90 },
          { name: "Civics", value: 85 },
          { name: "Geography", value: 88 },
          { name: "Presentation Skill", value: 82 },
        ],
      },
      {
        name: "Sabbir Khan",
        designation: "Accounting Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Sabbir Khan specializes in accounting and business studies with a focus on practical knowledge.",
        skills: [
          { name: "Accounting", value: 95 },
          { name: "Business Studies", value: 88 },
          { name: "Mathematic Skill", value: 80 },
          { name: "Analysis Skill", value: 85 },
        ],
      },
      {
        name: "Jannatul Ferdous",
        designation: "Economics Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Jannatul Ferdous explains economic concepts clearly and relates them to everyday life.",
        skills: [
          { name: "Economics", value: 93 },
          { name: "Statistics", value: 85 },
          { name: "Analysis Skill", value: 88 },
          { name: "Presentation Skill", value: 80 },
        ],
      },
      {
        name: "Hasan Mahmud",
        designation: "Physical Education Teacher",
        image: "/images/teachers/teacher.webp",
        bio: "Hasan Mahmud promotes physical fitness, discipline, and teamwork among students.",
        skills: [
          { name: "Physical Training", value: 96 },
          { name: "Team Management", value: 90 },
          { name: "Leadership", value: 88 },
          { name: "Health Education", value: 85 },
        ],
      },
    ],
  },

  why: {
    title: "Advantages of the School",
    subTitle:
      "Discover why our school stands out and provides the best learning experience for students.",

    whyCard: [
      {
        Icon: "/images/why/service-1.png",
        title: "Maximum Students get A+ in every year",
        description:
          "Through structured lessons, regular assessments, and personal guidance, most of our students consistently achieve A+ results every year.",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "We give international certificate",
        description:
          "Our institution provides internationally recognized certificates that add global value to students’ academic and professional careers.",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "Healthful our school environment",
        description:
          "We maintain a clean, safe, and health-friendly school environment that supports both physical well-being and effective learning.",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "We teach all time using projector",
        description:
          "All classes are conducted using projectors and multimedia tools to make lessons more interactive, visual, and easy to understand.",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "Smart digital classroom system",
        description:
          "Our smart classrooms are equipped with modern digital technology to enhance student engagement and improve learning outcomes.",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "Our every teachers are qualified",
        description:
          "All of our teachers are highly qualified, professionally trained, and experienced in delivering quality education to students.",
      },
    ],
  },
  galleryData: {
    title: "Our School Gallery",
    subTitle:
      "Take a glimpse of our vibrant classrooms, playgrounds, and school events through these images.",
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/5896843/pexels-photo-5896843.jpeg",
        alt: "Children playing in the playground",
        col: true,
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
        alt: "Modern Classroom with students",
      },

      {
        id: 3,
        src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
        alt: "Students in science laboratory",
      },
      {
        id: 4,
        src: "https://images.pexels.com/photos/6334870/pexels-photo-6334870.jpeg",
        alt: "School library with students reading",
      },
      {
        id: 5,
        src: "https://images.pexels.com/photos/35481331/pexels-photo-35481331.jpeg",
        alt: "School sports event in progress",
      },
      {
        id: 6,
        src: "https://images.pexels.com/photos/6816535/pexels-photo-6816535.jpeg",
        alt: "Art class with students painting",
      },
      {
        id: 7,
        src: "https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg",
        alt: "Front view of the school building",
        col: true,
      },
      {
        id: 8,
        src: "https://images.pexels.com/photos/10638070/pexels-photo-10638070.jpeg",
        alt: "Children working in the computer lab",
      },
      {
        id: 9,
        src: "https://www.hpsbegumpet.org.in/wp-content/uploads/2020/02/2A2A9538.jpg",
        alt: "School's annual cultural event",
      },
    ],
  },
  contactFormData: {
    title: "Get in Touch",
    subTitle:
      "We'd love to hear from you! Whether you have questions, suggestions, or want to enroll, reach out to us and we'll respond as soon as possible.",
    formField: {
      name: { placeholder: "Your Name", required: "Please enter your name" },
      email: {
        placeholder: "Your Email",
        required: "Please enter your email",
        invalid: "Please enter a valid email",
      },
      phone: {
        placeholder: "Your Phone",
        required: "Please enter your phone",
      },
      message: {
        placeholder: "Your Message",
        required: "Please enter your message",
      },
      submitButton: "Send Message",
    },
  },
  admissionData: {
    bgImg: "/images/admission/admission.jpg",
    title: "Admission Going On",
    subTitle:
      "We provides always best services for your life easier try to achieve our students satisfaction.",
    applyButton: {
      Icon: Award,
      text: "Apply Now",
    },
  },
  contactData: {
    contactInfo: [
      { name: "Email Address", value: "gtsc@gmail.com", Icon: Mail },
      { name: "Phone Number", value: "+880 17196-1150", Icon: Phone },
      {
        name: "Address",
        value: "73/1 Diamond Tower, Badda, Dhaka",
        Icon: MapPin,
      },
    ],
    socialInfo: [
      {
        name: "facebook",
        url: "https://www.facebook.com/seraprogrammer",
        Icon: Facebook,
      },
      {
        name: "twitter",
        url: "https://twitter.com/seraprogrammer",
        Icon: Twitter,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/seraprogrammer/",
        Icon: Instagram,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/seraprogrammer/",
        Icon: Linkedin,
      },
    ],
  },
};

export default en;
