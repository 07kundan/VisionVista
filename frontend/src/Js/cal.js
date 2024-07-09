// function to return video uploaded time/day/weeks

export function timeAgo(createdAt) {
  const now = new Date();
  const difference = Math.abs(now - new Date(createdAt));

  const seconds = difference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const years = weeks / 52;

  if (seconds < 60) {
    return `${Math.round(seconds)} seconds ago`;
  } else if (minutes < 60) {
    return `${Math.round(minutes)} minutes ago`;
  } else if (hours < 24) {
    return `${Math.round(hours)} hours ago`;
  } else if (days < 7) {
    return `${Math.round(days)} days ago`;
  } else if (weeks < 52) {
    return `${Math.round(weeks)} weeks ago`;
  } else {
    return `${Math.round(years)} years ago`;
  }
}

// ---------------------------------------------

// function show duration of video in thumbnail

export function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

// -------------------------------------------

// function for formating file size
export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
