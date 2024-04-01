particlesJS("particles-js", {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // لون الثلج
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.8, // تعديل قيمة الشفافية
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10, // زيادة حجم الجسيمات
      random: true,
      anim: {
        enable: true,
        speed: 3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1, // تغيير سرعة الجسيمات
      direction: "bottom", // تغيير اتجاه الحركة للأسفل
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});