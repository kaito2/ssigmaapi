/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ssigma.type.BidAsk', null, global);
goog.exportSymbol('proto.ssigma.type.OrderBook', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ssigma.type.BidAsk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssigma.type.BidAsk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigma.type.BidAsk.displayName = 'proto.ssigma.type.BidAsk';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ssigma.type.BidAsk.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigma.type.BidAsk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigma.type.BidAsk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigma.type.BidAsk.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    amount: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ssigma.type.BidAsk}
 */
proto.ssigma.type.BidAsk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigma.type.BidAsk;
  return proto.ssigma.type.BidAsk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigma.type.BidAsk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigma.type.BidAsk}
 */
proto.ssigma.type.BidAsk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ssigma.type.BidAsk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigma.type.BidAsk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigma.type.BidAsk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigma.type.BidAsk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.ssigma.type.BidAsk.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.ssigma.type.BidAsk.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double amount = 2;
 * @return {number}
 */
proto.ssigma.type.BidAsk.prototype.getAmount = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ssigma.type.BidAsk.prototype.setAmount = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ssigma.type.OrderBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ssigma.type.OrderBook.repeatedFields_, null);
};
goog.inherits(proto.ssigma.type.OrderBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigma.type.OrderBook.displayName = 'proto.ssigma.type.OrderBook';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ssigma.type.OrderBook.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ssigma.type.OrderBook.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigma.type.OrderBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigma.type.OrderBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigma.type.OrderBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchange: jspb.Message.getFieldWithDefault(msg, 1, ""),
    base: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quote: jspb.Message.getFieldWithDefault(msg, 3, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bidsList: jspb.Message.toObjectList(msg.getBidsList(),
    proto.ssigma.type.BidAsk.toObject, includeInstance),
    asksList: jspb.Message.toObjectList(msg.getAsksList(),
    proto.ssigma.type.BidAsk.toObject, includeInstance),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ssigma.type.OrderBook}
 */
proto.ssigma.type.OrderBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigma.type.OrderBook;
  return proto.ssigma.type.OrderBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigma.type.OrderBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigma.type.OrderBook}
 */
proto.ssigma.type.OrderBook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBase(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuote(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 5:
      var value = new proto.ssigma.type.BidAsk;
      reader.readMessage(value,proto.ssigma.type.BidAsk.deserializeBinaryFromReader);
      msg.addBids(value);
      break;
    case 6:
      var value = new proto.ssigma.type.BidAsk;
      reader.readMessage(value,proto.ssigma.type.BidAsk.deserializeBinaryFromReader);
      msg.addAsks(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ssigma.type.OrderBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigma.type.OrderBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigma.type.OrderBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigma.type.OrderBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBase();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuote();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ssigma.type.BidAsk.serializeBinaryToWriter
    );
  }
  f = message.getAsksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ssigma.type.BidAsk.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string exchange = 1;
 * @return {string}
 */
proto.ssigma.type.OrderBook.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ssigma.type.OrderBook.prototype.setExchange = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string base = 2;
 * @return {string}
 */
proto.ssigma.type.OrderBook.prototype.getBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ssigma.type.OrderBook.prototype.setBase = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string quote = 3;
 * @return {string}
 */
proto.ssigma.type.OrderBook.prototype.getQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ssigma.type.OrderBook.prototype.setQuote = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string symbol = 4;
 * @return {string}
 */
proto.ssigma.type.OrderBook.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ssigma.type.OrderBook.prototype.setSymbol = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated BidAsk bids = 5;
 * @return {!Array<!proto.ssigma.type.BidAsk>}
 */
proto.ssigma.type.OrderBook.prototype.getBidsList = function() {
  return /** @type{!Array<!proto.ssigma.type.BidAsk>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ssigma.type.BidAsk, 5));
};


/** @param {!Array<!proto.ssigma.type.BidAsk>} value */
proto.ssigma.type.OrderBook.prototype.setBidsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ssigma.type.BidAsk=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ssigma.type.BidAsk}
 */
proto.ssigma.type.OrderBook.prototype.addBids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ssigma.type.BidAsk, opt_index);
};


proto.ssigma.type.OrderBook.prototype.clearBidsList = function() {
  this.setBidsList([]);
};


/**
 * repeated BidAsk asks = 6;
 * @return {!Array<!proto.ssigma.type.BidAsk>}
 */
proto.ssigma.type.OrderBook.prototype.getAsksList = function() {
  return /** @type{!Array<!proto.ssigma.type.BidAsk>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ssigma.type.BidAsk, 6));
};


/** @param {!Array<!proto.ssigma.type.BidAsk>} value */
proto.ssigma.type.OrderBook.prototype.setAsksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ssigma.type.BidAsk=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ssigma.type.BidAsk}
 */
proto.ssigma.type.OrderBook.prototype.addAsks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ssigma.type.BidAsk, opt_index);
};


proto.ssigma.type.OrderBook.prototype.clearAsksList = function() {
  this.setAsksList([]);
};


/**
 * optional int64 timestamp = 7;
 * @return {number}
 */
proto.ssigma.type.OrderBook.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.ssigma.type.OrderBook.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


goog.object.extend(exports, proto.ssigma.type);
