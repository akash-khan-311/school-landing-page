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

const bn = {
  schoolName: "গ্লোবাল ট্যালেন্ট স্কুল এন্ড কলেজ",
  admissionButton: {
    title: "আবেদন করুন",
  },
  hero: {
    fixedTitle: "শিক্ষার পূর্ণ যাত্রা শুরু হোক",
    typingTitles: [
      "ষষ্ঠ শ্রেণি থেকে কলেজ পর্যন্ত",

      "ভিত্তি থেকে ভবিষ্যৎ",

      "শিক্ষা থেকে নেতৃত্ব",
    ],
    subtitle:
      "অভিজ্ঞ শিক্ষক ও আধুনিক পরিবেশে আমরা নিশ্চিত করি মানসম্মত শিক্ষা।",
    cta: "ভর্তি আবেদন করুন",
  },

  navItems: [
    { name: "হোম", href: "#home" },
    { name: "আমাদের সম্পর্কে", href: "#about" },
    { name: "শিক্ষক বৃন্দ", href: "#teachers" },
    { name: "আমরাই কেন", href: "#why" },
    { name: "গেলারি", href: "#gallery" },
    { name: "যোগাযোগ", href: "#contact" },
  ],

  about: {
    title: "আমাদের স্কুল সম্পর্কে",
    subTitle:
      "নিরাপদ ও সুশৃঙ্খল পরিবেশে মানসম্মত শিক্ষা দিয়ে শিক্ষার্থীদের উজ্জ্বল ভবিষ্যৎ গড়ে তোলা আমাদের লক্ষ্য।",
    cards: [
      {
        Icon: Heart,
        title: "পরিষ্কার পরিবেশ",
        des: "আমাদের স্কুলে সবসময় পরিষ্কার-পরিচ্ছন্ন ও স্বাস্থ্যসম্মত পরিবেশ বজায় রাখা হয়, যাতে শিক্ষার্থীরা সুস্থভাবে পড়াশোনা করতে পারে।",
      },
      {
        Icon: Volleyball,
        title: "বড় খেলার মাঠ ও খোলা জায়গা",
        des: "আমাদের স্কুলে রয়েছে বড় খেলার মাঠ ও খোলা জায়গা, যেখানে শিক্ষার্থীরা খেলাধুলা করে শরীর ও মন সতেজ রাখতে পারে।",
      },
      {
        Icon: School,
        title: "সুন্দরভাবে সাজানো শ্রেণিকক্ষ",
        des: "শিক্ষার্থীদের সুবিধার কথা মাথায় রেখে আমাদের শ্রেণিকক্ষগুলো সুন্দরভাবে সাজানো ও আরামদায়ক করা হয়েছে।",
      },
    ],
  },
  aboutVideoContent: {
    title: "ভিডিও সহ আমাদের স্কুল",
    subTitle: "আমাদের শিক্ষার পরিবেশ এবং সুযোগ সুবিধাগুলো দেখুন।",
    des: "আমাদের স্কুল শিক্ষার্থীদের জন্য নিরাপদ, পরিচ্ছন্ন এবং যত্নশীল পরিবেশ প্রদান করে, যেখানে তারা একাডেমিক এবং ব্যক্তিগত উভয় ক্ষেত্রেই বিকাশ লাভ করতে পারে। অভিজ্ঞ শিক্ষক, সুসজ্জিত শ্রেণিকক্ষ, আধুনিক ল্যাবরেটরি এবং বিনোদনের সুযোগ সুবিধা নিশ্চিত করে শিক্ষার্থীদের সার্বিক উন্নয়ন। শিক্ষার্থীদের প্রশ্ন করার, অন্বেষণ করার এবং সমালোচনামূলক চিন্তাভাবনা বিকাশ করার জন্য উৎসাহিত করা হয়। আমাদের লক্ষ্য কেবল একাডেমিক উৎকর্ষ নয়, বরং চরিত্র গঠন, সৃজনশীলতা এবং দলগত কাজের দক্ষতা বৃদ্ধি। স্কুলের পরিবেশ কৌতূহল, আত্মবিশ্বাস এবং শেখার প্রতি ভালোবাসা তৈরি করে, যা শিক্ষার্থীদের ভবিষ্যতের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করে।",
    points: [
      {
        icon: Leaf,
        text: "পরিবেশবান্ধব এবং পরিচ্ছন্ন ক্যাম্পাস।",
      },
      {
        icon: Rss,
        text: "আধুনিক প্রযুক্তি ব্যবহার করে ইন্টারেক্টিভ লার্নিং।",
      },
      {
        icon: Flag,
        text: "বড় খেলার মাঠ এবং খোলা জায়গা।",
      },
    ],
    videoThumbnail: "/images/about/thumbnail.jpg",
    videoUrl: "https://www.youtube.com/watch?v=40X5ahFcvlc",
  },
  info: {
    bgImg: "/images/about/bg.jpg",
    title: "আমাদের স্কুল সম্পর্কে কিছু তথ্য",
    subTitle:
      "আমাদের স্কুল দীর্ঘদিন ধরে মানসম্মত শিক্ষা, শৃঙ্খলা এবং আধুনিক শিক্ষাব্যবস্থার মাধ্যমে শিক্ষার্থীদের মেধা ও ভবিষ্যৎ গড়ে তুলছে।",
    stats: [
      {
        Icon: Users,
        title: 150,
        subtitle: "শিক্ষার্থী",
      },
      {
        Icon: UserRoundPen,
        title: 100,
        subtitle: "শিক্ষক",
      },

      {
        Icon: UserPlus,
        title: 700,
        subtitle: "গড় A+ ফলাফল",
      },
      {
        Icon: FilePenLine,
        percentage: true,
        title: 100,
        subtitle: "পাশের হার",
      },
      {
        Icon: School,
        title: 50,
        subtitle: "ক্লাসরুম",
      },
      {
        Icon: Trophy,
        title: 263,
        subtitle: "পুরস্কার",
      },
    ],
  },
  teacherSection: {
    title: "আমাদের দক্ষ শিক্ষকগণ",
    subTitle:
      "আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলীর সঙ্গে পরিচিত হোন, যারা শিক্ষার্থীদের শিক্ষাগত সাফল্য ও ব্যক্তিগত উন্নয়নে আন্তরিকভাবে নিবেদিত।",
    teachers: [
      {
        name: "লায়লা নূর",
        designation: "রসায়ন শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "লায়লা নূর একজন অভিজ্ঞ রসায়ন শিক্ষক, যিনি বাস্তবভিত্তিক শেখানো ও শিক্ষার্থীদের সক্রিয় অংশগ্রহণে গুরুত্ব দেন।",
        skills: [
          { name: "গণিত দক্ষতা", value: 80 },
          { name: "রসায়ন দক্ষতা", value: 90 },
          { name: "পদার্থবিজ্ঞান দক্ষতা", value: 70 },
          { name: "জীববিজ্ঞান দক্ষতা", value: 60 },
        ],
      },
      {
        name: "রহিম উদ্দিন",
        designation: "পদার্থবিজ্ঞান শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "রহিম উদ্দিন সহজ ভাষায় কঠিন পদার্থবিজ্ঞানের ধারণা উপস্থাপনে দক্ষ একজন শিক্ষক।",
        skills: [
          { name: "গণিত দক্ষতা", value: 85 },
          { name: "পদার্থবিজ্ঞান দক্ষতা", value: 92 },
          { name: "রসায়ন দক্ষতা", value: 65 },
          { name: "আইসিটি দক্ষতা", value: 70 },
        ],
      },
      {
        name: "নুসরাত জাহান",
        designation: "জীববিজ্ঞান শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "নুসরাত জাহান শিক্ষার্থীদের মধ্যে কৌতূহল সৃষ্টি করে জীববিজ্ঞান শেখাতে ভালোবাসেন।",
        skills: [
          { name: "জীববিজ্ঞান দক্ষতা", value: 93 },
          { name: "রসায়ন দক্ষতা", value: 72 },
          { name: "গণিত দক্ষতা", value: 60 },
          { name: "পদার্থবিজ্ঞান দক্ষতা", value: 65 },
        ],
      },
      {
        name: "আরিফ হাসান",
        designation: "গণিত শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "আরিফ হাসান গণিতকে সহজ ও আনন্দদায়কভাবে উপস্থাপন করার জন্য পরিচিত।",
        skills: [
          { name: "গণিত দক্ষতা", value: 95 },
          { name: "পদার্থবিজ্ঞান দক্ষতা", value: 78 },
          { name: "আইসিটি দক্ষতা", value: 80 },
          { name: "রসায়ন দক্ষতা", value: 60 },
        ],
      },
      {
        name: "ফারজানা আক্তার",
        designation: "ইংরেজি শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "ফারজানা আক্তার শিক্ষার্থীদের ইংরেজি যোগাযোগ দক্ষতা ও আত্মবিশ্বাস বাড়াতে কাজ করেন।",
        skills: [
          { name: "ইংরেজি দক্ষতা", value: 94 },
          { name: "উপস্থাপন দক্ষতা", value: 85 },
          { name: "সৃজনশীল লেখা", value: 80 },
          { name: "ক্লাস ব্যবস্থাপনা", value: 88 },
        ],
      },
      {
        name: "ইমরান হোসেন",
        designation: "আইসিটি শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "ইমরান হোসেন প্রকল্পভিত্তিক পদ্ধতিতে তথ্য ও যোগাযোগ প্রযুক্তি শেখান।",
        skills: [
          { name: "আইসিটি দক্ষতা", value: 96 },
          { name: "প্রোগ্রামিং", value: 85 },
          { name: "সমস্যা সমাধান", value: 82 },
          { name: "গণিত দক্ষতা", value: 70 },
        ],
      },
      {
        name: "সাদিয়া রহমান",
        designation: "বাংলা শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "সাদিয়া রহমান বাংলা সাহিত্য ও ব্যাকরণ সৃজনশীলভাবে শেখাতে আগ্রহী।",
        skills: [
          { name: "বাংলা ব্যাকরণ", value: 92 },
          { name: "সাহিত্য", value: 88 },
          { name: "সৃজনশীল লেখা", value: 85 },
          { name: "উপস্থাপন দক্ষতা", value: 80 },
        ],
      },
      {
        name: "তানভীর আহমেদ",
        designation: "সাধারণ বিজ্ঞান শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "তানভীর আহমেদ বিভিন্ন বিজ্ঞান বিষয় একত্রে উপস্থাপন করে শিক্ষার্থীদের ভিত্তি মজবুত করেন।",
        skills: [
          { name: "পদার্থবিজ্ঞান দক্ষতা", value: 80 },
          { name: "রসায়ন দক্ষতা", value: 78 },
          { name: "জীববিজ্ঞান দক্ষতা", value: 75 },
          { name: "গণিত দক্ষতা", value: 70 },
        ],
      },
      {
        name: "মালিহা ইসলাম",
        designation: "সামাজিক বিজ্ঞান শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "মালিহা ইসলাম বাস্তব উদাহরণের মাধ্যমে সামাজিক বিজ্ঞান পড়াতে পছন্দ করেন।",
        skills: [
          { name: "ইতিহাস", value: 90 },
          { name: "নাগরিকতা", value: 85 },
          { name: "ভূগোল", value: 88 },
          { name: "উপস্থাপন দক্ষতা", value: 82 },
        ],
      },
      {
        name: "সাব্বির খান",
        designation: "হিসাববিজ্ঞান শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "সাব্বির খান হিসাববিজ্ঞান ও ব্যবসায় শিক্ষা ব্যবহারিকভাবে শেখাতে দক্ষ।",
        skills: [
          { name: "হিসাববিজ্ঞান", value: 95 },
          { name: "ব্যবসায় শিক্ষা", value: 88 },
          { name: "গণিত দক্ষতা", value: 80 },
          { name: "বিশ্লেষণ দক্ষতা", value: 85 },
        ],
      },
      {
        name: "জান্নাতুল ফেরদৌস",
        designation: "অর্থনীতি শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "জান্নাতুল ফেরদৌস অর্থনীতির বিষয়গুলো দৈনন্দিন জীবনের সাথে মিলিয়ে ব্যাখ্যা করেন।",
        skills: [
          { name: "অর্থনীতি", value: 93 },
          { name: "পরিসংখ্যান", value: 85 },
          { name: "বিশ্লেষণ দক্ষতা", value: 88 },
          { name: "উপস্থাপন দক্ষতা", value: 80 },
        ],
      },
      {
        name: "হাসান মাহমুদ",
        designation: "শারীরিক শিক্ষা শিক্ষক",
        image: "/images/teachers/teacher.jpg",
        bio: "হাসান মাহমুদ শিক্ষার্থীদের শারীরিক সুস্থতা, শৃঙ্খলা ও দলগত কাজের গুরুত্ব শেখান।",
        skills: [
          { name: "শারীরিক প্রশিক্ষণ", value: 96 },
          { name: "দল ব্যবস্থাপনা", value: 90 },
          { name: "নেতৃত্ব", value: 88 },
          { name: "স্বাস্থ্য শিক্ষা", value: 85 },
        ],
      },
    ],
  },
  why: {
    title: "স্কুলের বিশেষ সুবিধাসমূহ",
    subTitle:
      "আমাদের স্কুলকে কেন আলাদা ও বিশেষ করে তোলে এবং কীভাবে আমরা শিক্ষার্থীদের জন্য সর্বোত্তম শেখার পরিবেশ নিশ্চিত করি তা জানুন।",

    whyCard: [
      {
        Icon: "/images/why/service-1.png",
        title: "প্রতি বছর সর্বোচ্চ সংখ্যক শিক্ষার্থীর A+ অর্জন",
        description:
          "পরিকল্পিত পাঠদান, নিয়মিত মূল্যায়ন এবং ব্যক্তিগত যত্নের মাধ্যমে আমাদের শিক্ষার্থীদের বড় একটি অংশ প্রতি বছরই A+ ফলাফল অর্জন করে।",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "আন্তর্জাতিকভাবে স্বীকৃত সার্টিফিকেট প্রদান",
        description:
          "আমরা আন্তর্জাতিকভাবে স্বীকৃত সার্টিফিকেট প্রদান করি, যা শিক্ষার্থীদের ভবিষ্যৎ শিক্ষা ও ক্যারিয়ারে গুরুত্বপূর্ণ ভূমিকা রাখে।",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "স্বাস্থ্যসম্মত ও নিরাপদ শিক্ষার পরিবেশ",
        description:
          "আমাদের স্কুলের পরিবেশ পরিচ্ছন্ন, নিরাপদ এবং স্বাস্থ্যবান্ধব, যা শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশে সহায়তা করে।",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "প্রজেক্টরের মাধ্যমে আধুনিক পাঠদান",
        description:
          "প্রতিটি ক্লাসে প্রজেক্টর ও মাল্টিমিডিয়া ব্যবহার করে পাঠদান করা হয়, যাতে বিষয়গুলো সহজ, স্পষ্ট ও আকর্ষণীয় হয়।",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "স্মার্ট ডিজিটাল ক্লাসরুম ব্যবস্থা",
        description:
          "আমাদের স্মার্ট ডিজিটাল ক্লাসরুম আধুনিক প্রযুক্তিতে সজ্জিত, যা শিক্ষার্থীদের শেখার আগ্রহ ও অংশগ্রহণ বাড়ায়।",
      },
      {
        Icon: "/images/why/service-1.png",
        title: "যোগ্য ও অভিজ্ঞ শিক্ষকবৃন্দ",
        description:
          "আমাদের সকল শিক্ষক উচ্চ শিক্ষিত, প্রশিক্ষিত এবং অভিজ্ঞ, যারা শিক্ষার্থীদের জন্য মানসম্মত শিক্ষা নিশ্চিত করেন।",
      },
    ],
  },
  galleryData: {
    title: "আমাদের স্কুল গ্যালারি",
    subTitle:
      "এই ছবিগুলোতে আমাদের উজ্জ্বল ক্লাসরুম, খেলার মাঠ এবং স্কুল ইভেন্টগুলোর ঝলক দেখুন।",
    images: [
      {
        col: true,
        id: 1,
        src: "https://images.pexels.com/photos/5896843/pexels-photo-5896843.jpeg",
        alt: "খেলার মাঠে খেলছে শিশুরা",
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
        alt: "ছাত্রদের সঙ্গে আধুনিক ক্লাসরুম",
      },
      {
        id: 3,
        src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
        alt: "বিজ্ঞান ল্যাবরেটরিতে ছাত্ররা কাজ করছে",
      },
      {
        id: 4,
        src: "https://images.pexels.com/photos/6334870/pexels-photo-6334870.jpeg",
        alt: "স্কুল লাইব্রেরিতে পড়ছে ছাত্ররা",
      },
      {
        id: 5,
        src: "https://images.pexels.com/photos/35481331/pexels-photo-35481331.jpeg",
        alt: "স্কুলের ক্রীড়া ইভেন্ট চলছে",
      },
      {
        id: 6,
        src: "https://images.pexels.com/photos/6816535/pexels-photo-6816535.jpeg",
        alt: "আর্ট ক্লাসে ছাত্ররা ছবি আঁকছে",
      },
      {
        col: true,
        id: 7,
        src: "https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg",
        alt: "স্কুল ভবনের সামনের দৃশ্য",
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
    title: "যোগাযোগ করুন",
    subTitle:
      "আমরা আপনার কথা শুনতে আগ্রহী! আপনার যদি কোনো প্রশ্ন, পরামর্শ বা ভর্তি সংক্রান্ত তথ্য প্রয়োজন হয়, আমাদের সাথে যোগাযোগ করুন। আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।",
    formField: {
      name: { placeholder: "আপনার নাম", required: "আপনার নাম লিখুন" },
      email: {
        placeholder: "আপনার ইমেইল ঠিকানা",
        required: "আপনার ইমেইল ঠিকানা লিখুন",
        invalid: "সঠিক ইমেইল ঠিকানা লিখুন",
      },
      phone: {
        placeholder: "আপনার ফোন নম্বর",
        required: "আপনার ফোন নম্বর লিখুন",
      },
      message: { placeholder: "বার্তা লিখুন", required: "বার্তা লিখুন" },
      submitButton: "বার্তা পাঠান",
    },
  },
  admissionData: {
    bgImg: "/images/admission/admission.jpg",
    title: "ভর্তি চলছে",
    subTitle:
      "আমরা সর্বদা সেরা পরিষেবা প্রদান করি যাতে আমাদের শিক্ষার্থীদের সন্তুষ্টি অর্জন করা সহজ হয়।",
    applyButton: {
      Icon: Award,
      text: "আবেদন করুন",
    },
  },
  contactData: {
    contactInfo: [
      {
        name: "ইমেইল ঠিকানা",
        value: "gtsc@gmail.com",
        Icon: Mail,
      },
      {
        name: "ফোন নম্বর",
        value: "+৮৮০ ১৭১৯৬-১১৫০",
        Icon: Phone,
      },
      {
        name: "ঠিকানা",
        value: "৭৩/১ ডায়মন্ড টাওয়ার, বাড্ডা, ঢাকা",
        Icon: MapPin,
      },
    ],
    socialInfo: [
      {
        name: "ফেসবুক",
        url: "https://www.facebook.com/seraprogrammer",
        Icon: Facebook,
      },
      {
        name: "টুইটার",
        url: "https://twitter.com/seraprogrammer",
        Icon: Twitter,
      },
      {
        name: "ইনস্টাগ্রাম",
        url: "https://www.instagram.com/seraprogrammer/",
        Icon: Instagram,
      },
      {
        name: "লিংকডইন",
        url: "https://www.linkedin.com/in/seraprogrammer/",
        Icon: Linkedin,
      },
    ],
  },
};

export default bn;
