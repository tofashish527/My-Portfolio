import hobby from "../assets/hobby.png";
import swift from "../assets/swift.png";
import task from "../assets/task.png";

export const projectsData = [
  {
    id: 1,
    name: "SwiftFix",
    image: swift,
    description: "A service management app for users to request and manage household or technical services efficiently.",
    stack: ["React", "Firebase Auth", "Node.js", "MongoDB"],
    demo: "https://swiftfix-client.web.app/",
    code: "https://github.com/tofashish527/SwiftFix",
    challenges: "Implementing secure role-based access for service providers and users.",
    improvements: "Add payment gateway and real-time order tracking."
  },
  {
    id: 2,
    name: "Task Monitor",
    image: task,
    description: "An employee task-tracking dashboard with analytics and role-based management.",
    stack: ["React", "Tailwind", "Firebase", "Node.js", "Express"],
    demo: "https://task-monitor-client.web.app/",
    code: "https://github.com/tofashish527/TaskMonitor",
    challenges: "Synchronizing real-time data and ensuring secure task assignment between HR and employees.",
    improvements: "Integrate performance reports and notifications."
  },
   {
    id: 3,
    name: "Hobby Tribe",
    image: hobby,
    description: "A social platform for hobby-based groups where users can create and join groups based on their interests.",
    stack: ["React", "Tailwind CSS", "Firebase", "MongoDB", "Express"],
    demo: "https://hobby-tribe-355ca.web.app/",
    code: "https://github.com/tofashish527/HobbyNest",
    challenges: "Managing authentication and dynamic group data synchronization between users.",
    improvements: "Add chat functionality and push notifications for group activities."
  },
];
