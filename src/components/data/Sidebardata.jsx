import hashtag from '../../assets/images/hashtag.png'
export const Sidebardata = [
    {
      id: 1,
      heading: "User Management",
      items: [
        {
          name: "Users",
        icon: import(`../../assets/images/home.png`),
        path:"/users"
        },
        {
          name: "Active Users",
          icon: hashtag,
          path:"/activeusers"
        },
        {
          name: "Feedback",
          icon: "loudspeaker",
          path:"/feedback"
        }
      ]
    },
    {
      id: 2,
      heading: "Product/App Management",
      items: [
        {
          name: "Leaderboard",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/Leaderboard"
        }
      ]
    },
    {
      id: 3,
      heading: "Live Classes Management",
      items: [
        {
          name: "Teacher List/Management",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/teacherlistmanagement"
        },
        {
          name: "Student List/Management",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/studentlistmanagement"
        },
        {
          name: "Schedule Live Classes",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/scheduleliveclasses"
        },
        {
          name: "One-on-One Class Management",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/one-on-oneclassmanagement"
        }
      ]
    },
    {
      id: 4,
      heading: "Support Management/System",
      items: [
        {
          name: "Support Ticket",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/supportmanagement"
          
        }
      ]
    },
    {
      id: 5,
      heading: "Settings",
      items: [
        {
          name: "Change Password",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/ChangePassword"
        }
      ]
    },
    {
      id: 6,
      heading: "Admin",
      items: [
        {
          name: "Admin Role",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/AdminRole"

        },
        {
          name: "Admin Users",
          icon: import(`../../assets/images/hashtag.png`),
          path:"/AdminUser"
        }
      ]
    },

 
   
  ];
  