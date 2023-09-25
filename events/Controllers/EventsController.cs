using events.Database;
using events.Models;
using events.Tables;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Net;
using System.Security;

namespace events.Controllers
{

    [ApiController]
    [AllowAnonymous]
    [Route("api/events")]
    
    public class EventsController : ControllerBase
    {

        private readonly EventManagerContext eventcontext;

        public EventsController(EventManagerContext context)
        {
            this.eventcontext = context;
        }
        
        [HttpPost]
        public async Task<Event> CreateEvent(Event newevent)
        {
            var existingEvent = eventcontext.Events.FirstOrDefault(e => e.Owner == newevent.Owner);
            if (existingEvent != null)
            {
                return null;
            }


            eventcontext.Events.Add(newevent);
            eventcontext.SaveChanges();

            return newevent;
        }
        
        [HttpGet]

        public async Task<List<Event>> GetEvent()
        {
            var existingEvents = eventcontext.Events.ToList();
            if (existingEvents != null)
            {
                return  existingEvents;
            }
            return null;
        }


        [HttpPut]
        [Route("update/{id}")]
        public Event UpdateEvent(int id, Event newevent) {
           
            var existingevent = eventcontext.Events.FirstOrDefault(o => o.Id == id);
            var existingEventowner = eventcontext.Events.FirstOrDefault(e => e.Owner == newevent.Owner);
            if (existingevent != null&& existingEventowner==null)
            {
                eventcontext.Entry(existingevent).CurrentValues.SetValues(newevent);
                eventcontext.SaveChanges();
                return  newevent;
            }


            return null;   }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult DeleteEvent(int id)
        {
            var existingevent = eventcontext.Events.Find(id);
            if (existingevent != null)
            {
                eventcontext.Events.Remove(existingevent);
                eventcontext.SaveChanges();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }

}


  }
