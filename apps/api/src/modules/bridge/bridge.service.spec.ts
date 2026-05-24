import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

// Mock PrismaService to avoid loading the generated Prisma client
jest.mock('../prisma/prisma.service', () => ({
  PrismaService: jest.fn(),
}));

import { BridgeRouterService } from './bridge-router.service';

import { WormholeService } from './providers/wormhole.service';
import { LayerswapService } from './providers/layerswap.service';
import { CctpService } from './providers/cctp.service';

describe('BridgeService', () => {
  let service: BridgeRouterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BridgeRouterService,
        // ConfigService is the first ctor dep on BridgeRouterService — a
        // minimal stub is enough; specific tests can override individual
        // .get() return values when behavior matters.
        { provide: ConfigService, useValue: { get: jest.fn() } },
        { provide: CctpService, useValue: {} },
        { provide: WormholeService, useValue: {} },
        { provide: LayerswapService, useValue: {} },
      ],
    }).compile();

    service = module.get<BridgeRouterService>(BridgeRouterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
