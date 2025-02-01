  if (decision.isDenied()) {
    res.writeHead(403, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid email address" }));
    return;
  }

  const existingUser = await User.findOne({ email }); 