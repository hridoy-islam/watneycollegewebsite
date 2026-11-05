/**
 * Lets a page stop actions that would take the user away from it - logging
 * out, say - while something must not be abandoned, like a running
 * assessment. The page registers a guard; the action calls `guardedLeave`,
 * and the guard decides when (or whether) to let it proceed.
 */
type LeaveGuard = (proceed: () => void) => void | Promise<void>;

let guard: LeaveGuard | null = null;

export const setLeaveGuard = (next: LeaveGuard | null) => {
  guard = next;
};

export const guardedLeave = (proceed: () => void) => {
  if (guard) void guard(proceed);
  else proceed();
};
