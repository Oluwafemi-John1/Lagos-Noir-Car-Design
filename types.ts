export interface Vehicle {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    image: string;
    status: 'Lagos Ground' | 'High Seas' | 'Sourcing';
    type: 'SUV' | 'Supercar' | 'Sedan';
}

export interface Message {
    id: string;
    sender: string;
    text: string;
    time: string;
    isUser: boolean;
    attachment?: {
        name: string;
        size: string;
        type: 'pdf' | 'image';
    };
    isSystem?: boolean;
}

export interface ChatThread {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
    active: boolean;
    isOnline?: boolean;
    isTyping?: boolean;
}

export interface GarageItem {
    id: string;
    name: string;
    location: string;
    mileage: string;
    nextService: string;
    status: 'Active' | 'Storage';
    image: string;
}
