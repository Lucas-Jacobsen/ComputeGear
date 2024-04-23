class Part {
    _id: { $oid: string };
    pn: string;
    description: string;
    rev: string;
    status: number;
    pref: number;
    ecn: string;
    oh: number;
    cost: number;
    type: number;
    drawing: string[];
    assembly: [string, { $numberInt: string }][];
    used: string[];
    vendor: string[];
  
    constructor(
      _id: { $oid: string },
      pn: string,
      description: string,
      rev: string,
      status: number,
      pref: number,
      ecn: string,
      oh: number,
      cost: number,
      type: number,
      drawing: string[],
      assembly: [string, { $numberInt: string }][],
      used: string[],
      vendor: string[]
    ) {
      this._id = _id;
      this.pn = pn;
      this.description = description;
      this.rev = rev;
      this.status = status;
      this.pref = pref;
      this.ecn = ecn;
      this.oh = oh;
      this.cost = cost;
      this.type = type;
      this.drawing = drawing;
      this.assembly = assembly;
      this.used = used;
      this.vendor = vendor;
    }
  }
  