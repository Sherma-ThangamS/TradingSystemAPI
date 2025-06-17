import { Worker } from "bullmq";
import { redis } from "../../config/redis";
import { matchOrders } from "../../utils/matching-engine";

export const orderProcessor = new Worker(
  "match-order",
  async (job) => {
    const { stock_id } = job.data;
    console.log(job.data, stock_id);
    await matchOrders(stock_id);
  },
  { connection: redis }
);
