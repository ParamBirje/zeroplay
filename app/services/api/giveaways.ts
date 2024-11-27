import { Giveaway } from "~/types";
import domain from "../domain";

export async function GiveawaysSortedByValue(): Promise<Giveaway[]> {
  try {
    const res = await fetch(`${domain}/api/giveaways?type=game&sort-by=value`);
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
