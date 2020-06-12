// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PrizePoolCreated extends ethereum.Event {
  get params(): PrizePoolCreated__Params {
    return new PrizePoolCreated__Params(this);
  }
}

export class PrizePoolCreated__Params {
  _event: PrizePoolCreated;

  constructor(event: PrizePoolCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get moduleManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get prizeStrategy(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PrizePoolBuilder extends ethereum.SmartContract {
  static bind(address: Address): PrizePoolBuilder {
    return new PrizePoolBuilder("PrizePoolBuilder", address);
  }

  compoundYieldServiceFactory(): Address {
    let result = super.call(
      "compoundYieldServiceFactory",
      "compoundYieldServiceFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_compoundYieldServiceFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "compoundYieldServiceFactory",
      "compoundYieldServiceFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createPeriodicPrizePool(
    _cToken: Address,
    _prizeStrategy: Address,
    _prizePeriodSeconds: BigInt,
    _ticketName: string,
    _ticketSymbol: string,
    _sponsorshipName: string,
    _sponsorshipSymbol: string
  ): Address {
    let result = super.call(
      "createPeriodicPrizePool",
      "createPeriodicPrizePool(address,address,uint256,string,string,string,string):(address)",
      [
        ethereum.Value.fromAddress(_cToken),
        ethereum.Value.fromAddress(_prizeStrategy),
        ethereum.Value.fromUnsignedBigInt(_prizePeriodSeconds),
        ethereum.Value.fromString(_ticketName),
        ethereum.Value.fromString(_ticketSymbol),
        ethereum.Value.fromString(_sponsorshipName),
        ethereum.Value.fromString(_sponsorshipSymbol)
      ]
    );

    return result[0].toAddress();
  }

  try_createPeriodicPrizePool(
    _cToken: Address,
    _prizeStrategy: Address,
    _prizePeriodSeconds: BigInt,
    _ticketName: string,
    _ticketSymbol: string,
    _sponsorshipName: string,
    _sponsorshipSymbol: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPeriodicPrizePool",
      "createPeriodicPrizePool(address,address,uint256,string,string,string,string):(address)",
      [
        ethereum.Value.fromAddress(_cToken),
        ethereum.Value.fromAddress(_prizeStrategy),
        ethereum.Value.fromUnsignedBigInt(_prizePeriodSeconds),
        ethereum.Value.fromString(_ticketName),
        ethereum.Value.fromString(_ticketSymbol),
        ethereum.Value.fromString(_sponsorshipName),
        ethereum.Value.fromString(_sponsorshipSymbol)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  creditFactory(): Address {
    let result = super.call("creditFactory", "creditFactory():(address)", []);

    return result[0].toAddress();
  }

  try_creditFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "creditFactory",
      "creditFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  governor(): Address {
    let result = super.call("governor", "governor():(address)", []);

    return result[0].toAddress();
  }

  try_governor(): ethereum.CallResult<Address> {
    let result = super.tryCall("governor", "governor():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  interestTrackerFactory(): Address {
    let result = super.call(
      "interestTrackerFactory",
      "interestTrackerFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_interestTrackerFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "interestTrackerFactory",
      "interestTrackerFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  periodicPrizePoolFactory(): Address {
    let result = super.call(
      "periodicPrizePoolFactory",
      "periodicPrizePoolFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_periodicPrizePoolFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "periodicPrizePoolFactory",
      "periodicPrizePoolFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prizePoolModuleManagerFactory(): Address {
    let result = super.call(
      "prizePoolModuleManagerFactory",
      "prizePoolModuleManagerFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_prizePoolModuleManagerFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "prizePoolModuleManagerFactory",
      "prizePoolModuleManagerFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rng(): Address {
    let result = super.call("rng", "rng():(address)", []);

    return result[0].toAddress();
  }

  try_rng(): ethereum.CallResult<Address> {
    let result = super.tryCall("rng", "rng():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sponsorshipFactory(): Address {
    let result = super.call(
      "sponsorshipFactory",
      "sponsorshipFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_sponsorshipFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sponsorshipFactory",
      "sponsorshipFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ticketFactory(): Address {
    let result = super.call("ticketFactory", "ticketFactory():(address)", []);

    return result[0].toAddress();
  }

  try_ticketFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ticketFactory",
      "ticketFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timelockFactory(): Address {
    let result = super.call(
      "timelockFactory",
      "timelockFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_timelockFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "timelockFactory",
      "timelockFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  trustedForwarder(): Address {
    let result = super.call(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_trustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreatePeriodicPrizePoolCall extends ethereum.Call {
  get inputs(): CreatePeriodicPrizePoolCall__Inputs {
    return new CreatePeriodicPrizePoolCall__Inputs(this);
  }

  get outputs(): CreatePeriodicPrizePoolCall__Outputs {
    return new CreatePeriodicPrizePoolCall__Outputs(this);
  }
}

export class CreatePeriodicPrizePoolCall__Inputs {
  _call: CreatePeriodicPrizePoolCall;

  constructor(call: CreatePeriodicPrizePoolCall) {
    this._call = call;
  }

  get _cToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prizeStrategy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _prizePeriodSeconds(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _ticketName(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _ticketSymbol(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _sponsorshipName(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _sponsorshipSymbol(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class CreatePeriodicPrizePoolCall__Outputs {
  _call: CreatePeriodicPrizePoolCall;

  constructor(call: CreatePeriodicPrizePoolCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _prizePoolModuleManagerFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _governor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _compoundYieldServiceFactory(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _periodicPrizePoolFactory(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _ticketFactory(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _timelockFactory(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _sponsorshipFactory(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _creditFactory(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _interestTrackerFactory(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get _rng(): Address {
    return this._call.inputValues[9].value.toAddress();
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[10].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}
