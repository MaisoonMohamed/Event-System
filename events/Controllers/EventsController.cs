using events.Database;
using events.Models;
using events.Tables;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Net;
using System.Security;

namespace events.Controllers
{

    [ApiController]
    [Route("api/events")]
    public class EventsController : ControllerBase
    {

        private readonly EventManagerContext eventcontext;

        public EventsController(EventManagerContext context)
        {
            this.eventcontext = context;
        }

        [HttpPost]
        public bool CreateEvent(Event newevent)
        {
            var existingEvent = eventcontext.Events.FirstOrDefault(e => e.Owner == newevent.Owner);
            if (existingEvent != null)
            {
                return false;
            }


            eventcontext.Events.Add(newevent);
            eventcontext.SaveChanges();

            return true;
        }

        [HttpGet]
        public List<Event> GetEvent()
        {
            var existingEvents = eventcontext.Events.ToList();
            if (existingEvents != null)
            {
                return existingEvents;
            }
            return null;
        }


        [HttpPut]
        public IActionResult UpdateEvent(int id, Event newevent) {
            if (id != newevent.Id)
            {
                return BadRequest();
            }
            var existingevent = eventcontext.Events.FirstOrDefault(o => o.Id == id);
            if(existingevent != null)
            {
                eventcontext.Entry(existingevent).CurrentValues.SetValues(newevent);
                eventcontext.SaveChanges();
                return NoContent();
            }
          
            
                return NotFound();
            
           


        }

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
