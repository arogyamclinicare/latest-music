"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextEffectProps {
  children: ReactNode;
  per?: "char" | "word";
  delay?: number;
  className?: string;
  variants?: {
    container: Variants;
    item: Variants;
  };
  preset?: "default" | "blur";
}

const defaultVariants = {
  container: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 10,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  },
};

const blurVariants = {
  container: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
      },
    },
  },
};

export function TextEffect({
  children,
  per = "char",
  delay = 0,
  className = "",
  variants,
  preset = "default",
}: TextEffectProps) {
  // Convert children to string
  const text = typeof children === "string" ? children : String(children);
  const textArray = per === "char" ? text.split("") : text.split(" ");

  // Use custom variants if provided, otherwise use preset
  let containerVariants: Variants;
  let itemVariants: Variants;

  if (variants) {
    containerVariants = variants.container;
    itemVariants = variants.item;
  } else {
    const selectedVariants = preset === "blur" ? blurVariants : defaultVariants;
    containerVariants = selectedVariants.container;
    itemVariants = selectedVariants.item;
  }

  // Merge delay into container's visible transition while preserving staggerChildren
  const modifiedContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...(containerVariants.visible as any),
      transition: {
        ...((containerVariants.visible as any)?.transition || {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={modifiedContainerVariants}
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={itemVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

