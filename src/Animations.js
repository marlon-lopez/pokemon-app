export const hearthAnimation = {
  initial: {
    scale: 0.5,
  },
  animation: {
    scale: 1,
  },
}

export const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: { opacity: 1, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 400,
  },
}
