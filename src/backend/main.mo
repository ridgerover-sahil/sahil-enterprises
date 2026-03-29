import List "mo:core/List";
import Time "mo:core/Time";

actor {
  public type Message = {
    name : Text;
    phone : Text;
    message : Text;
    submitted : Time.Time;
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, phone : Text, message : Text) : async () {
    let newMessage : Message = {
      name;
      phone;
      message;
      submitted = Time.now();
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.toArray();
  };
};
