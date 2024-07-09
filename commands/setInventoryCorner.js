import { setInventoryCorner } from '../features/inventoryDisplay';

export default function(args) {
    let pos = parseInt(args[0]);
    setInventoryCorner(pos);
}
