import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const socialInfo = [
  {
    name: "facebook",
    url: "https://www.facebook.com/seraprogrammer",
    Icon: Facebook,
  },
  { name: "twitter", url: "https://twitter.com/seraprogrammer", Icon: Twitter },
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
];

export const contactInfo = [
  { name: "Email Address", value: "gtsc@gmail.com", Icon: Mail },
  { name: "Phone Number", value: "+880 17196-1150", Icon: Phone },
  { name: "Address", value: "73/1 Diamond Tower, Badda, Dhaka", Icon: MapPin },
];

export default contactInfo;
