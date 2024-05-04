export interface IPart {
    _id: { $oid: string };
    pn: string;
    description: string[];
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
  }