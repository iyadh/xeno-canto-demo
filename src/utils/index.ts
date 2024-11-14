// Helper function to parse the length string into seconds
export const parseLengthToSeconds = (lengthStr: string): number => {
  const parts = lengthStr.split(":");
  if (parts.length === 2) {
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return minutes * 60 + seconds;
  } else if (parts.length === 1) {
    return parseInt(parts[0], 10);
  } else {
    return 0;
  }
};

export default parseLengthToSeconds;
