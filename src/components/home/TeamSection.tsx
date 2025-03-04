import { motion } from "framer-motion";const team=[{name:"张三",position:"首席执行官",expertise:"数字化转型专家",image:"/images/team-1.jpg",achievements:"20年数字技术行业经验"},{name:"李四",position:"技术总监",expertise:"数字孪生技术专家",image:"/images/team-2.jpg",achievements:"多项发明专利"}];export default function TeamSection(){return(<section className="py-20"><div className="container mx-auto px-4"><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">核心团队</h2><div className="w-20 h-1 bg-primary mx-auto"></div></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{team.map((member,index)=>(<motion.div key={member.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:index*0.1}} className="bg-white rounded-lg shadow-lg overflow-hidden"><div className="aspect-w-1 aspect-h-1"><img src={member.image} alt={member.name} className="object-cover w-full h-full"/></div><div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3><p className="text-primary font-medium mb-2">{member.position}</p><p className="text-gray-600 mb-4">{member.expertise}</p><p className="text-sm text-gray-500">{member.achievements}</p></div></motion.div>))}</div></div></section>);}
