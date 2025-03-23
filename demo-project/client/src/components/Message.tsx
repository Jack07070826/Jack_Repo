interface MessageProps {
  name: string;
}

function Message({ name }: MessageProps) {
  if (name !== null) {
    return <h1>Hello to {name}</h1>;
  } else {
    return <h1>hello world</h1>;
  }
}

export default Message;
