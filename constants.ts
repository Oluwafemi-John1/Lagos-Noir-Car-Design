import { Vehicle, ChatThread, Message, GarageItem } from "./types";

export const VEHICLES: Vehicle[] = [
  {
    id: "v1",
    name: "Mercedes-AMG G63",
    subtitle: "Brabus 800 Package",
    price: "₦350M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfCm4dj_G2QsADQMAC1oApzTpbzvwtY1QoTYfT5pfk0vnDLBPfu6yzsKzxx7XDxGccN6he2um-Oyhtx6VzdxNNqub6TrQ8BBW83dJs8rebjcUV3KTzuVWPIUXPXjUA0sy9VHWmx7SaUR-XfFYwLp1dbFs-DhWjrpyyvdHuBrhxfRneEwDXztMFeQdt0TVazpi-e3ZJca3Kw225Nkk0GJr8PxxB_XNLWOch5u6m3N-Wt88CKGCG2_p52xbqFYIx_x3T-sLmZ3dOUVlJ",
    status: "Lagos Ground",
    type: "SUV",
  },
  {
    id: "v2",
    name: "Rolls-Royce Cullinan",
    subtitle: "Black Badge",
    price: "₦800M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbZ2drtF_b3iaRRavwbIopDj4v1onvdLgdQUj4vi8C79a5UfmNbxsfbrVlXs2lO86kskX9LeNAMrhjSTxTUjAls89rGeReLOjWb1OAxKvwk6AnAE6Yt1Gf0hMaFqvpD6f11MC16U7b_NkrgI3brhm8o6Q4gadkg0nBcUS1ITRWociQi2EeFlGdRWR5Eemv9K3578KfYfKIjrFAJoXg_wSyzKZ-klS1qnQso1vbVzQ3RT8WOvs7fu6aEyWIu6zBs3r-wo76Nt8nFe53",
    status: "High Seas",
    type: "SUV",
  },
  {
    id: "v3",
    name: "Lamborghini Urus",
    subtitle: "Performante",
    price: "₦450M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfIiQMQdAoXll6Xj5f7MWmsz3AnF1uVIHRnudil0C6YCkEaKqDXl8XnVpN169yxpzQkZB03fSi_xKDiEtUw8rTwarg0r4IlUIEp8yqjr67GZqzoT4vlDT9kVLbjRbiLeViPE08T9LlbwqVr4bhEjPyVAryh63pbCd7UHrKbe4rdf6LfvDkkYzkB8Ds9CHbO6bE3cy-kUSqlV9cJv21KLZKbzbg0uv47aUhJKOuA5txUDV7XFvIb_nudTgTGi2FvaDYMuXYfVP6oaXW",
    status: "Sourcing",
    type: "Supercar",
  },
  {
    id: "v4",
    name: "Maybach S680",
    subtitle: "Haute Voiture",
    price: "₦620M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVNkAGS9g0wnWu2Y86EOZlJUEwYTaXriQUAY1UKp7ETVjrzhvnKCOeRQR-8mh9zzutmxy97smEGOXIFhcylmbdIue9Zi27-0xL4SB7gymA9UVkGWCYjReUu0Yn8MHNTM1tACMTYehZsTy63DYKb7k7VsqyUsWnBtY28zGjeEkymfaqLDxX790H2mtyBqzRBppsJpGD_d16S4ACvTLtyFA6Lbdrg47s8tIuZtWtAoIDxNooTd__g-Rkob5ytfxhlbSPDr_AEBtmWYx",
    status: "Lagos Ground",
    type: "Sedan",
  },
  {
    id: "v5",
    name: "Ferrari SF90",
    subtitle: "Assetto Fiorano",
    price: "₦550M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqL1CRWadsS67QuqRs7pjPtLbtqhsiTAF8BFG6WTJs3_-DTGD5h6YPYISEwWstixK_mVga6tEAvP5PdEEnNuNZ7VVGsHmkfIACTayk84UKcrMOO17DbE-ks0dFV788UQbqLOuwIiqGpBDMm3w1BKD3y_abD_lc8uzk_SyJcPCsPXuUWbDpQYhlMHVIvDcn5N991PQlUCLlwIA8sPwkE3J7FW_yaob_CQNWrwOFo7nOV2nujdCzXEylwsFRRDHcAe3frazR-EbIVeQy",
    status: "High Seas",
    type: "Supercar",
  },
  {
    id: "v6",
    name: "Range Rover SV",
    subtitle: "Autobiography LWB",
    price: "₦380M",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Vhu6nOiSNaDiahxlFb12JWI0LaCHJRoeUSy3Tg3novOKvqjsMBWSu_jrsSBvHqpN66pWMpmOv46VAky1Tc5XVfyPWFE4iB1ZRADwKOVRct78fiCwry56SbT8QyawiXuqJSlKeHfsqt7RByqpzH4T3tMprE27nOywZ3KRztzayt83plyLsG7ic_Bqlbh6USYk0YrzUrRul_jlfeaC95rdGigf_mtSbHODxioFjpB391seZrM1S-ndGHSrFqqDAgVVGLlL1-1speIg",
    status: "Lagos Ground",
    type: "SUV",
  },
];

export const CHAT_THREADS: ChatThread[] = [
  {
    id: "t1",
    name: "Sola - Lead Broker",
    lastMessage: "The G-Wagon cleared customs this morning...",
    time: "10:42 AM",
    active: true,
    isOnline: true,
    isTyping: true,
  },
  {
    id: "t2",
    name: "Customs Agent",
    lastMessage: "Docs ready for the Rolls Royce Phantom.",
    time: "Yesterday",
    active: false,
    isOnline: false,
  },
  {
    id: "t3",
    name: "Logistics & Delivery",
    lastMessage: "Shipment tracking update: Vessel Arrived.",
    time: "Oct 24",
    active: false,
    isOnline: false,
  },
  {
    id: "t4",
    name: "Concierge Support",
    lastMessage: "Leave a note for when we return.",
    time: "Offline",
    active: false,
    isOnline: false,
  },
];

export const MESSAGES: Message[] = [
  {
    id: "m1",
    sender: "Sola",
    text: "Good morning, Mr. Adebayo. Regarding your inquiry on the G63 AMG — I have excellent news. The vessel docked at Apapa late last night.",
    time: "09:15 AM",
    isUser: false,
  },
  {
    id: "m2",
    sender: "Me",
    text: "That is sooner than expected. Is it cleared for delivery to Banana Island yet? I want it before the weekend.",
    time: "09:42 AM",
    isUser: true,
  },
  {
    id: "m3",
    sender: "Sola",
    text: "Yes, sir. Our team expedited the clearing process this morning. The vehicle is currently held at our secure facility in VI.",
    time: "10:05 AM",
    isUser: false,
  },
  {
    id: "m4",
    sender: "Sola",
    text: "I’ve attached the clearance certificate and the duty receipt below for your records.",
    time: "10:05 AM",
    isUser: false,
    attachment: {
      name: "PROOF_OF_DUTY_G63.pdf",
      size: "2.4 MB",
      type: "pdf",
    },
  },
  {
    id: "m5",
    sender: "Sola",
    text: "To initiate the final transport logistics and security detail for delivery, we require the 20% commitment deposit as discussed.",
    time: "10:06 AM",
    isUser: false,
    isSystem: true,
  },
];

export const GARAGE_ITEMS: GarageItem[] = [
  {
    id: "g1",
    name: "Mercedes-AMG G63",
    location: "Lagos • Matte Black",
    mileage: "2,450 KM",
    nextService: "Oct 12, 2024",
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtp0Ees-9LDhs8-hgPzYF6Z92G5pBQ6_layq6OTjmLBynl89HVXj1ifbYXtWU7EK0U-JxCGiJdGUJHIHiEC4zjeHv1wTiC-LASw0TEtKcVJBOxEWvLunj19F72rSyh2tJeoQdPbubz1WL5el-9nPU6ORQy02o7qmhnJiBIjV9x5Crj1lV0O_s-6vL-v7F-_N3iUX5gu8PS2XR_Lhh4k4NejI4vZDLq6NBvrrmwLbnGcG_oFegKyxpWFmhnL5DRuWAxRX6Lt4eENWtN",
  },
  {
    id: "g2",
    name: "Rolls-Royce Cullinan",
    location: "Abuja • Midnight Blue",
    mileage: "450 KM",
    nextService: "Dec 01, 2024",
    status: "Storage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB94j28yALoqIQNCs4kpqeTcTPMEcLkIHQERK6zIlpHuxyjy9_fG2EWmWOnZ2pH0L98kJ-YpJoGG6-aEjd2Uyd2DswM6ZmmC5nMmiRn72A-5mQnhhxPtF2RoGdkp38YMrMH154FGFlGQHhT2evscX56Zw4JLXit4BWFfFOBx4RGSRAVfERaRvaq-cG6ExIaiyCxPhAS6r8h6cArI0DkqPSBWennakmuxLLMExXHQMWTMtaurb9rYio6W6WY9FLUK-9xRNQQke8z6QBG",
  },
];