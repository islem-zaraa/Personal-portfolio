import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar = ({ name, level, color }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm text-gray-400">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default SkillBar;