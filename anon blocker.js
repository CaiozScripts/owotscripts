// * caioz's epic anon blocker
// inspired by some poopman chat filter script
// ik it doesn't refresh chat but it works
// use /block anon its faster :p
// and /unblock anon to unblock
const originalAddChat = addChat;

// overriding the function because yes
addChat = function(chatfield, id, type, nickname, message, realUsername, op, admin, staff, color, date, dataObj) {
  // this is the part where we do the funny
  if (!realUsername) {
    return;
  }

  originalAddChat(chatfield, id, type, nickname, message, realUsername, op, admin, staff, color, date, dataObj);
};
