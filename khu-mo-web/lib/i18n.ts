export const LOCALES = ["vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

type Dictionary = {
  nav: {
    story: string;
    product: string;
    process: string;
    gallery: string;
    contact: string;
    enquire: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  story: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: string[];
  };
  product: {
    eyebrow: string;
    title: string;
    enquire: string;
    categories: {
      signature: string;
      limited: string;
      contemporary: string;
    };
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; detail: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      interest: string;
      message: string;
    };
    placeholders: {
      phone: string;
    };
    options: {
      general: string;
      product: string;
      events: string;
      trade: string;
    };
    buttonIdle: string;
    buttonSending: string;
    success: string;
    error: string;
    validation: {
      name: string;
      email: string;
      message: string;
    };
  };
  footer: {
    heritage: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  legal: {
    privacyTitle: string;
    privacyDescription: string;
    privacyBody1: string;
    privacyBody2: string;
    termsTitle: string;
    termsDescription: string;
    termsBody1: string;
    termsBody2: string;
    backHome: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  vi: {
    nav: {
      story: "Cau chuyen",
      product: "San pham",
      process: "Quy trinh",
      gallery: "Hinh anh",
      contact: "Lien he",
      enquire: "Tu van",
      menu: "Menu",
      close: "Dong",
      language: "Ngon ngu",
    },
    hero: {
      tagline: "Toi luyen duoi long dat. Ban linh tren dinh cao.",
      title: "Khu Mo Distillery",
      subtitle:
        "Ruou thu cong cao cap mang tinh than nui rung Viet Nam, ket hop di san nguyen ban va ky thuat hien dai.",
      primaryCta: "Tu van",
      secondaryCta: "Kham pha san pham",
    },
    story: {
      eyebrow: "Di san",
      title: "Cau chuyen duoc tao nen tu do cao va lua",
      body: "Khu Mo bat dau noi khong khi nui rung lanh, nguyen lieu that, va nghe lam ruou gan voi doi song cong dong. Moi chai ruou la tri thuc truyen doi duoc tinh chinh cho vi giac hien dai.",
      pillars: [
        "Nguon goc: truyen thong lang nui duoc giu gin qua nhieu the he.",
        "Che tac: chung cat noi dong, nghi cham de can bang va tao chieu sau.",
        "Dang cap: san xuat gioi han, tuyen chon chat luong nghiem ngat.",
        "Nghi thuc: danh cho nhung khoanh khac ket noi, qua tang va le ky niem.",
      ],
    },
    product: {
      eyebrow: "Noi bat",
      title: "San pham small-batch voi ca tinh rieng",
      enquire: "Tu van",
      categories: {
        signature: "Dau an thuong hieu",
        limited: "Gioi han",
        contemporary: "Duong dai",
      },
    },
    process: {
      eyebrow: "Che tac",
      title: "Tu nguyen lieu tho den ly ruou nghiem",
      steps: [
        { title: "Nguon", detail: "Lua chon ngu coc va thao moc dia phuong theo tung me." },
        { title: "Len men", detail: "Len men cham de tao tang huong phuc hop." },
        { title: "Chung cat", detail: "Chung cat noi dong de toi uu do trong va do sau." },
        { title: "Nghi", detail: "Nghi co kiem soat de huong vi mem va hoa quyen." },
        { title: "Dong chai", detail: "Can chinh nong do, kiem dinh, va hoan thien thu cong." },
      ],
    },
    gallery: {
      eyebrow: "Bo suu tap",
      title: "Goc nhin tu nguyen lieu, quy trinh va khoanh khac",
    },
    contact: {
      eyebrow: "Lien he",
      title: "Dong hanh cung lan phuc vu tiep theo cua ban",
      intro:
        "Cho chung toi biet nhu cau cua ban, doi ngu se phan hoi voi thong tin san pham, goi y va huong dan tiep theo.",
      labels: {
        name: "Ho ten",
        email: "Email",
        phone: "So dien thoai (tuy chon)",
        interest: "Nhu cau",
        message: "Noi dung",
      },
      placeholders: {
        phone: "Nhap so dien thoai",
      },
      options: {
        general: "Tong quan",
        product: "San pham",
        events: "Su kien",
        trade: "Thuong mai",
      },
      buttonIdle: "Gui yeu cau",
      buttonSending: "Dang gui...",
      success: "Cam on ban. Chung toi da nhan duoc yeu cau.",
      error: "Khong the gui yeu cau. Vui long kiem tra lai thong tin va thu lai.",
      validation: {
        name: "Vui long nhap ho ten.",
        email: "Vui long nhap email hop le.",
        message: "Vui long chia se them chi tiet.",
      },
    },
    footer: {
      heritage: "Bam re tu lua nghe truyen thong, hoan thien cho nghi thuc hien dai.",
      contact: "Lien he",
      privacy: "Chinh sach bao mat",
      terms: "Dieu khoan su dung",
    },
    legal: {
      privacyTitle: "Chinh sach bao mat",
      privacyDescription: "Trang chinh sach bao mat tam thoi cho website Khu Mo.",
      privacyBody1:
        "Day la ban nhap chinh sach bao mat cho website brochure cua Khu Mo. Ban chinh thuc se mo ta du lieu duoc thu thap, muc dich su dung, va cach nguoi dung co the yeu cau cap nhat hoac xoa du lieu.",
      privacyBody2:
        "Hien tai, thong tin gui qua form lien he chi duoc dung de phan hoi va cham soc yeu cau.",
      termsTitle: "Dieu khoan su dung",
      termsDescription: "Trang dieu khoan su dung tam thoi cho website Khu Mo.",
      termsBody1:
        "Day la ban nhap dieu khoan su dung cho website brochure cua Khu Mo. Ban chinh thuc se bao gom quy dinh su dung, quyen so huu noi dung, gioi han trach nhiem, va thong tin lien he phap ly.",
      termsBody2:
        "Khi su dung website, nguoi dung dong y rang thong tin san pham va su kien co the thay doi, va can duoc xac nhan truc tiep truoc khi dat mua hoac dat lich.",
      backHome: "Quay ve trang chu",
    },
  },
  en: {
    nav: {
      story: "Story",
      product: "Product",
      process: "Process",
      gallery: "Gallery",
      contact: "Contact",
      enquire: "Enquire",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    hero: {
      tagline: "Forged Below. Owned Above.",
      title: "Khu Mo Distillery",
      subtitle:
        "Premium craft liquor from Vietnam's mountain spirit tradition, made with raw heritage and modern precision.",
      primaryCta: "Enquire",
      secondaryCta: "Explore Product",
    },
    story: {
      eyebrow: "Heritage",
      title: "A story shaped by altitude and fire",
      body: "Khu Mo begins where mountain air is cold, ingredients are honest, and spirit-making is part of communal life. Every bottle reflects ancestral knowledge refined for modern palates.",
      pillars: [
        "Origin: mountain village traditions preserved through family craft.",
        "Craft: copper still distillation, slow-rested for balance and depth.",
        "Status: small-batch production with strict quality selection.",
        "Ritual: designed for shared moments, gifting, and celebration.",
      ],
    },
    product: {
      eyebrow: "Featured",
      title: "Small-batch spirits with distinct character",
      enquire: "Enquire",
      categories: {
        signature: "Signature",
        limited: "Limited Batch",
        contemporary: "Contemporary",
      },
    },
    process: {
      eyebrow: "Craft",
      title: "From raw ingredient to ritual pour",
      steps: [
        { title: "Raw", detail: "Locally sourced grains and botanicals selected per batch." },
        { title: "Ferment", detail: "Slow fermentation to build aromatic complexity." },
        { title: "Distill", detail: "Copper still passes tuned for clarity and depth." },
        { title: "Rest", detail: "Controlled resting to soften and harmonize the spirit." },
        { title: "Bottle", detail: "Final proofing, quality checks, and hand-finished bottling." },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Visual notes from place and process",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us help with your next pour",
      intro:
        "Share what you are looking for and our team will get back with availability, recommendations, and next steps.",
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        interest: "Interest",
        message: "Message",
      },
      placeholders: {
        phone: "Enter your phone number",
      },
      options: {
        general: "General",
        product: "Product",
        events: "Events",
        trade: "Trade",
      },
      buttonIdle: "Send Enquiry",
      buttonSending: "Sending...",
      success: "Thanks. We received your enquiry.",
      error: "We could not submit your enquiry. Please check your details and try again.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        message: "Please share a bit more detail.",
      },
    },
    footer: {
      heritage: "Rooted in ancestral fire, crafted for modern ritual.",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyDescription: "Privacy policy placeholder for Khu Mo brochure website.",
      privacyBody1:
        "This is a placeholder privacy policy for the Khu Mo brochure website. The final policy will describe what personal data is collected, how it is used, and how visitors can request updates or deletion of their information.",
      privacyBody2:
        "For now, enquiries submitted through the contact form are handled only for response and follow-up purposes.",
      termsTitle: "Terms of Use",
      termsDescription: "Terms of use placeholder for Khu Mo brochure website.",
      termsBody1:
        "This is a placeholder terms page for the Khu Mo brochure website. The final terms will cover permitted site usage, content ownership, liability limitations, and contact details for legal inquiries.",
      termsBody2:
        "By using this website, visitors acknowledge that product and event information may change and should be confirmed directly before placing any order or booking.",
      backHome: "Back to home",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
